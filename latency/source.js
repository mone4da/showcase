

class Source{
	constructor(host){
		const EventSource = require('eventsource')
		let se = new EventSource(host)

		se.onmessage = event => {
					try{
						this.onData(JSON.parse(event.data))
					}catch(e){}
		}
	}

	onData(data){}
}

module.exports = Source
