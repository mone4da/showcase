const config = require('./config')
const data = require('./data/network.js')

class Network extends require('./network'){
	constructor(){
		super(config.network, data.service())
	}
}

class App extends require('./desk'){
	constructor(){
		super(config)
	}

	onListening(){
		console.log('on', config.port)

		this.network = new Network()
	}

	data(res){
		res.json(data.client(config.network.type))
	}

}

new App()

