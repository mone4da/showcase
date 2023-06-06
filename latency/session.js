class Session{
	constructor(res){

		this.res = res
		this.res.set({
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'no-cache',
			'Content-Type': 'text/event-stream',
			'Connection': 'keep-alive'
		    })

		res.flushHeaders()

		let data = {id: 'message', timestamp: Date.now() }
		this.res.write(`data: ${JSON.stringify(data)}\n\n`)

		this.res.socket.on('close', () => {
			this.close()
		})
	}


	close(){}

	notify(data){
		try{
			let latency = data.latency
			let channel = parseInt(data.channel[0].toString(2).padStart(8,'0').split('').reverse().join(''),2)
			let msg = {latency, channel}
			this.res.write(`data: ${JSON.stringify({id:'data',...msg})}\n\n`)
		}catch(e){
			console.log(e)
		}
	}
}

module.exports = Session
