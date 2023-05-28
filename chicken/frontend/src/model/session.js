import Rest from './rest'

class Session{
	constructor(){}

	enter(player, data){
		this.rest.enter({player, ...data})
	}

	move(player, data){
		this.rest.move({player, ...data})
	}

	fire(player, data){
		this.rest.fire({player, amos : data})
	}

	exit(player, data){
		this.rest.exit({player, ...data})
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
				case 'change' : this.onChange(msg); break;
				case 'enter' : this.onEnter(msg); break;
				case 'exit' : this.onExit(msg); break;
			}
		}catch(e){
			console.log(e)
		}
	}

	onWelcome(msg){}

	onChange(msg){}
	onEnter(msg){}
	onExit(msg){}

	async initialize(initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok

		if (this.state.ok){
			this.state.system.chickens = config.data.chickens
		}

		this.connect('/goyaala')

		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}

}

export default Session
