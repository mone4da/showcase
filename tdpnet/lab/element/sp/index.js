const {workerData, parentPort} = require('node:worker_threads')

let {id, neightboors} = workerData

let transform = msg => {
	switch(msg.data){
		case 'shortest': return msg
		default: return null
	}
}

let signal = msg => {
	msg.channel = [id, ...msg.channel]
	parent.Port.postMessage({...msg, neightboors})
}

let send = data => {
	let msg = transform(data)
	msg && parentPort.postMessage( {...msg, neightboors})
}

let processMessage = msg => {
	if (msg.signal){
		signal(msg)
		return
	}

	if (msg.channel.indexOf(id) >= 0)
		send(msg)
}

console.log('node', id, 'alive')

parentPort.on('message', msg => processMessage(msg))
