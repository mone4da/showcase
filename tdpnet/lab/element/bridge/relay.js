
class Relay{
	constructor(config){
		this.id = config.id
	}

	forward(msg){
	//check if signal
		if (msg.signal){
			msg.channel = msg.channel.indexOf(this.id) < 0 ? [...msg.channel, this.id] : msg.channel
			return msg
		}

		//check if already in channel
		if (msg.channel.indexOf(this.id) >= 0)
			return msg

		return null //drop it

	}

	process(msg, consume){
		consume( this.forward(msg) )
	}
}

module.exports = Relay
