const config = require('./config')

class Desk extends require('./desk'){
	constructor(netgate){
		super(config)

		this.netgate = netgate
	}

	onListening(){
		console.log('on', config.port)
	}

	move(req, res){
		let msg = req.body
		this.message(msg.player, '', msg, 'move', this.channel.data, 1)
		console.log('move', msg.player, msg)

		res.json({})
	}

}

class App extends require('./netgate'){
	constructor(){
		super(config.netgate)
	}

	onInitialized(){
		console.log('initialized')

		this.desk = new Desk(this)
	}

	onNetworkMessage(channel, msg, extra) {
		super.onNetworkMessage(channel, msg, extra)

		switch(msg.subject){
			case 'move' : this.onMove(channel, msg); break;
			default: console.log(msg)
		}
	}

	onMove(channel, msg){
		this.desk.broadcast(channel, msg)
	}

}

new App()
