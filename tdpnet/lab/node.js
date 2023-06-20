const {workerData, parentPort} = require('node:worker_threads')

let id = workerData.id

let processMessage = msg => {
	console.log(id, msg)
	msg === 'ready' && parentPort.postMessage('hello there from ' + id)
}

console.log('alive', id)

parentPort.on('message', msg => processMessage(msg))
