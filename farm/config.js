const chickens = require('./data/chickens')

module.exports = {
	edgeId: 0,

	port: 1447,
	content: './frontend/build',

	region: 'de',
	copyright: '4 Digital Asset © 2023',

	security: {
		key: '../security/key.pem',
		cert: '../security/cert.pem'
	},

	netgate: {
		inchannel: {
			family: 'udp4',
			port: 33300
		},

		outchannel: [{
			family: 'udp4',
			port: 40000,
			host: 'localhost'},
			{
			family: 'udp4',
			port: 40001,
			host: 'localhost'}
		]
	},

	maze: {
		data: './data/maze_0010',
		entry: {x: 0, z: 7},
		exit: {x: 29, z: 26},

		chickens: chickens
	}

}
