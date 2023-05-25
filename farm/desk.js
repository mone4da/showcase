
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
		app.post('/change/position', (req, res) => this.change('position', req, res))
		app.post('/change/color', (req, res) => this.change('color', req, res))
		app.post('/enter', (req, res) => this.enter(req, res))

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


	change(property, req, res){}
	enter(req, res){}

	goyaala(config, res){
		let token = uuid().toUpperCase()
		this.sessions[token] = this.createSession(res, token, config)
	}

	loadConfig(res, config){
		let data = fs.readFileSync(config.maze.data, 'utf8')
		res.json({
			maze: JSON.parse(data),
			entry: config.maze.entry,
			exit: config.maze.exit
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
