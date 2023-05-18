
const http = require('http')
const xpr = require('express')
const fs = require('fs')
const {v4 : uuid} = require('uuid')
const Session = require('./session')
const Channel = require('./channel')

class Desk{
	constructor(config){
		this.channel = new Channel()
		this.channel.mark(config.edgeId)

		this.sessions = {}

		let app = xpr()
		app.use(xpr.json())
		app.use(xpr.static(config.content))

		app.get('/config', (req, res) => this.loadConfig(res, config))
		app.get('/goyaala', (req, res) => this.goyaala(config, res))
		app.post('/yaala', (req, res) => this.yaala(req, res))
		app.post('/yoole', (req, res) => this.yoole(req, res))

		http.Server(app).listen(config.port, () => this.onListening())

	}

	message(from, to, data, subject, channel, signal){
		return this.netMessage({
			timestamp: Date.now(),
			from,
			to,
			subject,
			body: data
		}, channel, signal)
	}

	netMessage(msg, channel, signal){
		let dataBytes = Array.from(Buffer.from( JSON.stringify(msg) , 'utf8'))
		return new Uint8Array([...channel,signal, ...dataBytes])

	}


	yoole(req, res){
		let msg = req.body.data
		console.log('yoole', msg)
		//this.message(msg.from, msg.to, msg.data, 'yoole', msg.channel, 0)

		res.json({})
	}

	yaala(req, res){
		let msg = req.body.data
		this.netgate.signal( this.message(msg.from, '', msg.data, 'yaala', this.channel.data, 1) )

		res.json({})
	}


	goyaala(config, res){
		let token = uuid().toUpperCase()
		this.sessions[token] = this.createSession(res, token, config)
	}

	loadConfig(res, config){
		let maze = fs.readFileSync(config.maze.data, 'utf8')
		res.json({
			maze: JSON.parse(maze),
		})
	}

	closeSession(token){
		delete this.sessions[token]
	}

	createSession(res, token,  config){
		return new Session(token, config.edgeId, res, ()  => this.closeSession(token))
	}

	onListening(){}

	broadcast(channel, data){
		let recipients = Object.values(this.sessions).filter(item => item.id != data.from)

		recipients.forEach( session => session.yaala(channel, data, 1 ))
	}

	send( channel, data){
		this.sessions[data.to]?.yoole(channel, data, 0)
	}
}

module.exports = Desk
