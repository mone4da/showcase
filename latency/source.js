

class Source{
	constructor(host){
		const EventSource = require('eventsource')
		let se = new EventSource(host)

		let time = Date.now()
		se.onmessage = event => {
					if (Date.now() - time >= 250){
						try{
							this.onData(JSON.parse(event.data))
						}catch(e){}

						time = Date.now()
					}
		}
	}

	onData(data){}
}

module.exports = Source
