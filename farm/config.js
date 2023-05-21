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
		params: {
			width: 70,
			height: 70,
			entry: {x: 0, y: 3},
			exit: {x: 69, y: 66},
			ratio: 200,
			randomizer: 4000,
			drilling: .8
		},

		data: './data/maze_0002'
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
