const config = require('./config')

class Desk extends require('./desk'){
	constructor(netgate){
		super(config)

		this.netgate = netgate
	}

	onListening(){
		console.log('on', config.port)
	}

	change(property, req, res){
		let msg = req.body
		this.message(msg.player, '', {...msg, property}, 'change', this.channel.data, 1)

		console.log('change', msg)

		res.json({})
	}

	enter(req, res){
		let msg = req.body
		this.message(msg.player, '', msg, 'enter', this.channel.data, 1)

		console.log('enter', msg)

		res.json({})
	}

	exit(req, res){
		let msg = req.body
		this.message(msg.player, '', msg, 'exit', this.channel.data, 1)

		console.log('exit', msg)

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
			case 'change' : this.onChange(channel, msg); break;
			default: console.log(msg)
		}
	}

	onChange(channel, msg){
		this.desk.broadcast(channel, msg)
	}

}

new App()

