const dgram = require('node:dgram')
const Channel = require('./channel')

class NetgateSession{
	constructor(config){
		this.edgeId = config.edgeId

		this.initializeIn(config.inchannel, () => {
			this.initializeOut(config.outchannel, () => {
				this.onInitialized()
			})
		})
	}

	onInitialized(){}

	error(error, detail){
		return {
		      timespamp: Date.now(),
		      from: '',
		      to: '',
		      subject: 'error',
		      body:  { error, detail  }
		    }
	}

	isSignal( message ){
		return message[8] === 1
	}

	retrieveData(message){
		let str = null
		try{
			str = String.fromCharCode(...message.slice(9))
			return JSON.parse(str)
		}catch(e){
			return this.error( e.toString(), str )
		}
	}

	retrieveChannel(message){
		return [...message.slice(0,8)]
	}

	retrieveChannelString(data){
		let channel = new Channel()
		channel.set([...data])
		return channel.toHex()
	}

	initializeIn( config, initialized ){
		this.inChannel = dgram.createSocket(config.family)
		this.inChannel.on('listening', () => {
			console.log('listenin on port', config.port)
			initialized()
		})

		this.inChannel.on('message', (msg, info) => {
			this.onNetworkMessage(this.retrieveChannel(msg), this.retrieveData(msg), { ...info, signal : this.isSignal(msg)} )
		})

		this.inChannel.bind(config.port)
	}

	initializeOut( configs, initialized ){
		this.outChannel = []
		configs.forEach( async config => {
			let socket = dgram.createSocket(config.family)
			socket.connect( config.port, config.host, ()=> {
				this.outChannel.push( socket )
				this.outChannel.length === configs.length && initialized()
			})
		})
	}

	onNetworkMessage( data, info){}
	onInitialized(){}

	send(data){
		this.outChannel.forEach(socket => socket.send( data ) )
	}

	signal( data ){
		this.outChannel.forEach(socket => socket.send( data ) )
	}

}

module.exports = NetgateSession
