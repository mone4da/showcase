const {workerData, parentPort} = require('node:worker_threads')

let {id, neightboors} = workerData

let transform = msg => {
	switch(msg.data){
		default: return msg
	}
}

let send = data => {
	let msg = transform(data)
	msg && parentPort.postMessage( {...msg, neightboors})
}

let dropped = msg => {
	//check if signal
	if (msg.signal){
		msg.channel = msg.channel.indexOf(id) < 0 ? [...msg.channel, id] : msg.channel
		return false
	}

	//check if already in channel
	if (msg.channel.indexOf(id) >= 0)
		return false

	return true //drop it
}

let processMessage = msg => {
	if (dropped(msg))
		return

	send(msg)
}

console.log('node', id, 'alive')

parentPort.on('message', msg => processMessage(msg))
