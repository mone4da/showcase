
const http = require('http')
const xpr = require('express')
const Session = require('./session')

class Desk{
	constructor(config){

		let app = xpr()
		app.use(xpr.json())
		app.use(xpr.static(config.content))

		app.get('/consumer', (req, res) => this.consumer(res))

		http.Server(app).listen(config.port, () => this.onListening())

	}

	consumer(res){
		this.session = this.createSession(res)
	}

	closeSession(){
	}

	createSession(res){
		return new Session(res, ()  => this.closeSession())
	}

	onListening(){}

	notify(data){
		this.session.notify(data)
	}
}

module.exports = Desk
