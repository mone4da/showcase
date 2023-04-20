
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket){
		super(id, socket)

		console.log('session', id)

		this.notifying()

	}

	onEnd(id){
		console.log(id, 'ended')
	}

	onMessage(data){
		console.log(data, 'into', this.id)
		console.log(data,'out of', this.id)
		this.send(data)
	}

	notifying(){
		setInterval(() => {
			let data = {
				us: {in: Math.floor(Math.random()*100) + 10, out: Math.floor(Math.random()*100) + 10},
				sg: {in: Math.floor(Math.random()*100) + 10, out: Math.floor(Math.random()*100) + 10},
				de: {in: Math.floor(Math.random()*100) + 10, out: Math.floor(Math.random()*100) + 10},
				gb: {in: Math.floor(Math.random()*100) + 10, out: Math.floor(Math.random()*100) + 10},
				au: {in: Math.floor(Math.random()*100) + 10, out: Math.floor(Math.random()*100) + 10}
			}

			this.send(data)
		}, 500)
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
		return new Session(this.newSessionId(), socket)
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
