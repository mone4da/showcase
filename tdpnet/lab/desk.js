
const http = require('http')
const xpr = require('express')

class Desk{
	constructor(config){

		let app = xpr()
		app.use(xpr.json())
		app.use(xpr.static(config.content))

		app.get('/data', (req, res) => this.data(res))

		http.Server(app).listen(config.port, () => this.onListening())

	}

	data(res){}

	onListening(){}
}

module.exports = Desk
