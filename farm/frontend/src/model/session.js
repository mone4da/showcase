import Rest from './rest'

class Session{
	constructor(){}

	move(player, data){
		this.rest.move({player, ...data})
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
				case 'move' : this.onMove(msg); break;
			}
		}catch(e){
			console.log(e)
		}
	}

	onWelcome(msg){}

	onMove(msg){}

	async initialize(initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok

		if (this.state.ok){
			this.state.system.maze = config.data.maze
		}

		this.connect('/goyaala')

		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}

}

export default Session
