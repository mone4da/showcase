const http = require('http')
const xpr = require('express')
const {Server} = require('socket.io')


class Desk{
	constructor(config){
		this.app = xpr()

		this.server = http.createServer(this.app)

		this.app.use(xpr.static(config.app.content))

		this.app.get('/config', (req, res) => this.config(req, res))

		this.server.listen(config.app.port, ()=> {
			this.io = new Server(this.server)
			this.onInitialized()
		})
	}

	onInitialized(){}

	config(req, res){}
}

module.exports = Desk
