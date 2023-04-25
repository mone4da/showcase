
class SessionManager{
	constructor(io){
		io.on('connection', socket => this.onConnection( this.createSession(socket)))

		this.onInitialized()
	}

	onInitialized(){}
	onConnection(session){}

	createSession( socket ){
		return null
	}
}

module.exports = SessionManager
