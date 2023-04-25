import Session from './session'
import Rest from './rest'
import Interpreter from './interpreter'
import objects from './context'
import language from './language'

class Model extends Session{
	constructor( initialized ){
		super()

		this.state = {
			system: {},
			user: {}
		}
		this.initialize( initialized )
	}

	async initialize( initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok

		if (this.state.ok){
			this.state.system.region = config.data.region
			this.state.system.copyright = config.data.copyright

			this.state.user.apps = config.data.apps

			this.interpreter = new Interpreter(language, objects)

			this.connect()
		}

		initialized( this )
	}

	onLatency(data) {
		//this.onUpdate && this.onUpdate(data.time, 'latency')
	}

	async loadConfig(){
		return await this.rest.config()
	}

	update(id, data){
		let command = this.interpreter.build(data)

		if (command.status === 0)
			this.handleCommand(command)
		else
			this.handleCommandError(command)
	}

	handleCommandError(command){
	}

	handleCommand(command){
		switch (command.context.type){
			case 'desktop': {
				this.state.user.apps.push('window')
				this.onUpdate && this.onUpdate(command, 'command-desktop')
			 }
		}

	}
}

export default Model
