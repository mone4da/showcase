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

	onData(msg){
		console.log(msg.latency, msg.channel)
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
