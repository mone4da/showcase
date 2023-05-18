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

	maze: {
		width: 40,
		height: 80,
		entry: {x: 0, y: 3},
		exit: {x: 79, y: 6},
		ratio: 5,
		randomizer: 400,
		drilling: .8
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
	}

}
