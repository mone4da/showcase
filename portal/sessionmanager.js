
const Session = require('./session')

class SessionManager{
	constructor(io){
		io.on('connection', socket => this.onConnection( this.createSession(socket)))

		this.onInitialized()
	}

	onInitialized(){}
	onConnection(sesion){}
	newSessionId(){  return Date.now() }

	createSession( socket ){
		return new Session(this.newSessionId(), socket)
	}
}

module.exports = SessionManager
