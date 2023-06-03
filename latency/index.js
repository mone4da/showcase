const config = require('./config')

class Source extends require('./source'){
	constructor(consume){
		super(config.source)

		this.consume = consume
	}

	onData(data){
		this.consume(data)
	}
}

class App extends require('./desk'){
	constructor(){
		super(config)
	}

	onListening(){
		console.log('on', config.port)
	}

	consumer(res){
		super.consumer(res)

		new Source(data => this.notify(data) )
	}

}

new App()

