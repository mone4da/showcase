import Rest from './rest'

class Session{
	constructor(){}

	yaala(from, data){
		this.rest.yaala({from, data})
	}

	yoole(from, to, data){
		this.rest.yoole({from, to, data})
	}


	connect(path){
		let source = new EventSource(path)
		source.addEventListener('message', msg => this.onMessage(msg.data) )
	}

	onMessage(data){
		try{
			let msg = JSON.parse(data)
			switch(msg.id){
				case 'welcome' : this.onWelcome(msg); break;
				case 'yaala' : this.onIn(msg); break;
			}
		}catch(e){
			console.log(e)
		}
	}

	onWelcome(msg){}

	onIn(msg){
		console.log('yaala', msg)
	}

	async initialize(initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok

		if (this.state.ok){
		}

		this.connect('/goyaala')

		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}

}

export default Session
