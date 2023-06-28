const {workerData, parentPort} = require('node:worker_threads')
const Lane = require('./lane')

let lanes = {
	left: new Lane(workerData.lanes.left),
	right: new Lane(workerData.lanes.right)
}

let send = msg => {
	msg && parentPort.postMessage( msg )
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
	let relayMessage = lanes[msg.lane].process(msg)
	send(relayMessage)
	/*if (dropped(msg))
		return

	send(msg)*/
}

parentPort.on('message', msg => processMessage(msg))
