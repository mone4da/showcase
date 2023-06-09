import state from './state'
import Session from './session'

class Model extends Session{
	constructor( initialized ){
		super()
		this.state = state

		this.initialize( initialized )
	}

	onWelcome(msg){
		this.state.user.token = msg.data
		console.log('welcome!!', this.state.user.token)
		this.notify(msg.timestamp, 'token')

		this.enter(this.state.user.token, this.state.user.player)
	}

	onChange(msg){
		let data = JSON.stringify(msg.data)
		console.log('change', data)
	}

	onEnter (msg){
		console.log('enter', msg)
	}


	notify(data, id){
		this.onUpdate && this.onUpdate(data, id)
	}

	//methods
	update(data, id){
		switch(id){
			case 'move' :  this.handleMove(data); break;
			case 'exit' : this.handleExit(data); break;
			case 'cp' : this.handleControlPanel(data); break;
	 	}
	}

	handleControlPanel(info){
		switch(info.id){
			case 'color' : this.handleCPcolor(info.data); break;
		}
	}

	handleCPcolor(data){
		this.state.user.player.material.color = data;
		this.color(this.state.user.token, {material: this.state.user.player.material})

		this.notify(Date.now(), 'color')
	}

	handleMove(data){
		this.move(this.state.user.token, {...data, material: this.state.user.player.material})
	}

	handleExit(data){
		this.exit(this.state.user.token, data)
	}
}

export default Model
