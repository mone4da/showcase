import Rest from './rest'

class Session{
	constructor(){}

	connect(path){
		let source = new EventSource(path)
		source.addEventListener('message', msg => this.onMessage(msg.data) )
	}

	onMessage(data){
		try{
			let msg = JSON.parse(data)
			switch(msg.id){
				case 'welcome' : this.onWelcome(msg); break;
				case 'data' : this.onData(msg); break;
			}
		}catch(e){
			console.log(e)
		}
	}

	onWelcome(msg){}

	onData(msg){}

	async initialize(initialized ){
		this.rest = new Rest()

		this.connect('/consumer')

		initialized( this )
	}

}

export default Session
