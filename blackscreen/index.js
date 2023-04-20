
const config = require('./config')

class Session extends require('./session'){
	constructor(socket){
		super(config, socket)
	}
}

class SessionManager extends require('./sessionmanager'){
	constructor(io){
		super(io)
	}

	onInitialized(){
		console.log(config.sessionmanager.greeting)
	}

	createSession(socket){
		return new Session(socket)
	}
}

class App extends require('./desk'){
	constructor(){
		super(config)
	}

	onInitialized(){
		new SessionManager(this.io)
		console.log(config.app.greeting, config.app.port)
	}

	config(req, res){
		res.json(config.session)
	}
}

new App()
