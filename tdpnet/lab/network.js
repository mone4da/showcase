
const {Worker, workerData} = require('node:worker_threads')

class Network{
	constructor(config, data){
		this.nodes = {}
		for(let node of data.nodes)
			this.createNode(node.id, config.type[node.type].model, data.links)

		//this.signal(0, 'shortest')
	}

	broadcast(msg){
		for(let entry of Object.values(this.nodes))
			entry.node.postMessage(msg)
	}

	createNode(id, path, links){
		let neightboors = links.filter(item => item.a === id).map(item => item.b)

		let node = new Worker(path, {workerData: {id, neightboors}})
		node.on('message', msg => this.onMessage(id, msg) )
		this.nodes[id] = node
	}

	onMessage(id, msg){
		for(let nid of msg.neightboors)
			this.nodes[nid]?.postMessage(msg)
	}

	signal(id, msg){
		for(let nid of this.nodes[id]?.neightboors)
			this.nodes[nid]?.postMessage({channel: [id], signal: 1, data: msg})
	}

	send(id, channel, msg){
		for(let nid of msg.neightboors)
			this.nodes[nid]?.postMessage({channel, signal: 0, data: msg})
	}

	
}

module.exports = Network
