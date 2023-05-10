const xpr = require('express')

class Desk{
	constructor(config){
		let app = xpr()
		app.use(xpr.json())
		app.use(xpr.static(config.content))

		app.listen(config.port, () => this.onInitialized())

	}

	onInitialized(){}

}

module.exports = Desk
