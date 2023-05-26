import Rest from './rest'

class Session{
	constructor(){}

	enter(player, data){
		this.rest.enter({player, ...data})
	}

	move(player, data){
		this.rest.move({player, ...data})
	}

	color(player, data){
		this.rest.color({player, ...data})
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
			}
		}catch(e){
			console.log(e)
		}
	}

	onWelcome(msg){}

	onChange(msg){}
	onEnter(msh){}

	async initialize(initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok

		if (this.state.ok){
			this.state.system.maze = config.data.maze
			this.state.user.player.position = config.data.entry
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
