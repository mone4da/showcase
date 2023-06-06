import state from './state'
import Session from './session'

const max = list => list.reduce((max,a) => a > max ? a : max)

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

	onData(msg){
		let index = msg.channel

		let data = this.state.system.data[index]
		this.state.system.data[index] = [msg.latency,...data.slice(0,data.length-1)]

		this.notify(Date.now(), 'data')
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
