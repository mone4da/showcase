const http = require('https')
const xpr = require('express')
const {Server} = require('socket.io')
const fs = require('fs')


class Desk{
	constructor(config){
		this.app = xpr()

		let httpOptions = {
			key: fs.readFileSync(config.app.security.key),
			cert: fs.readFileSync(config.app.security.cert)
		}

		this.server = http.createServer(httpOptions, this.app)

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
