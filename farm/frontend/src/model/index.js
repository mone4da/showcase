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
	}

	onIn(msg){
		let data = JSON.stringify(msg.data)
		console.log('in', data)
	}


	notify(data, id){
		this.onUpdate && this.onUpdate(data, id)
	}

	//methods
	update(data, id){
		switch(id){
	 	}
	}

}

export default Model
