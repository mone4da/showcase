
const Relay = require('./relay')

class Lane{
	constructor(config){
		this.relays = config.relays.map(config => new Relay(config))
	}

	process(msg, consume){
		this.relays.forEach(relay => relay.process(msg, msg => consume(msg)))
	}
}

module.exports = Lane
