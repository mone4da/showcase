
const config = require('./config')

class App extends require('./desk'){
	constructor(){
		super(config)
	}

	onInitialized(){
		console.log('on', config.port)
	}

}

new App()
