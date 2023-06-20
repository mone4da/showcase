
const {Worker, workerData} = require('node:worker_threads')

class Network{
	constructor(config, data){
		this.nodes = {}
		for(let node of data.nodes)
			this.createNode(node.id, config.path, data.links)

		this.broadcast('ready')
	}

	broadcast(msg){
		for(let node of Object.values(this.nodes))
			node.postMessage(msg)
	}

	createNode(id, path, links){
		let node = new Worker(path, {workerData: {id}})
		node.on('message', msg => this.onMessage(node.id, msg, links.filter(item => item.a === id).map(item => item.b)))
		this.nodes[id] = node
	}

	onMessage(id, msg, neightboors){
		for(let nid of neightboors)
			this.nodes[nid]?.postMessage(msg)
	}
}

module.exports = Network
