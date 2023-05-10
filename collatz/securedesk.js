
const http = require('https')
const xpr = require('express')
const fs = require('fs')

class Desk{
	constructor(config){

		let app = xpr()
		app.use(xpr.json())
		app.use(xpr.static(config.content))

		let option = {
			key: fs.readFileSync(config.security.key),
			cert: fs.readFileSync(config.security.cert)
		}

		http.Server(option, app).listen(config.port, () => this.onListening())

	}

}

module.exports = Desk
