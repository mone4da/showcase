
class Session{
	constructor(id, socket){
		this.id = id
		this.socket = socket
		this.socket.on('disconnect',() => this.onEnd(id))

		this.socket.on('data', data => this.onMessage(data))
	}

	onEnd(id){}
	onMessage(data){}

	send(data){
		this.socket.emit('data', data)
	}
}

module.exports = Session
