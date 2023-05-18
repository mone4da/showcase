
const config = require('./config')

class Desk extends require('./desk'){
	constructor(netgate){
		super(config)

		this.netgate = netgate
	}

	onListening(){
		console.log('on', config.port)
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
			case 'yaala' : this.onYaala(channel, msg); break;
			case 'yoole' : this.onYoole(channel, msg); break;
			default: console.log(msg)
		}
	}

	onYaala(channel, msg){
		this.desk.broadcast(channel, msg)
	}

	onYoole(channel, msg){
		this.desk.send(channel, msg)
	}

}

new App()
