const Channel = require('./channel')

class Session{
	constructor(id, edgeId, res, consume){
		this.edgeId = edgeId
		this.id = id

		this.storage = ['potatos','airplane','rock','steal','hill']

		this.res = res
		this.res.set({
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'no-cache',
			'Content-Type': 'text/event-stream',
			'Connection': 'keep-alive'
		    })

		res.flushHeaders()

		let data = {id: 'welcome', data: this.id}
		this.res.write(`data: ${JSON.stringify(data)}\n\n`)

		this.res.socket.on('close', () => {
			this.close()
			consume({id:'close', data: this.id})
		})

		this.channel = new Channel()
		this.channel.mark(this.edgeId)
	}


	close(){}

	yaala(channelData, _data){
		let channel = new Channel()
		channel.set( channelData, this.edgeId )

		let data = {id : 'yaala', data: _data, channel: channel.data}

		console.log('yaala', data)
		this.res.write(`data: ${JSON.stringify(data)}\n\n`)
	}

	yoole(channelData, _data){
		let channel = new Channel()
		channel.set( channelData, this.edgeId )

		let data = {id : 'yoole', data: _data, channel: channel.data}

		this.res.write(`data: ${JSON.stringify(data)}\n\n`)
	}

}

module.exports = Session
