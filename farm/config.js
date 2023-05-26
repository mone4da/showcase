
const maxBullets = 10

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

		chickens: {
			rufus : {
				position : {x: 50, z: 30},
				size: .01,
				orientation: -30,
				rate: 20,
				speed : {
					rotation: .1,
					translation: 1
				},
				material : {
					color: '#0D516C',
					opacity: 1
				},
				bullets: maxBullets
			},

			gunter : {
				position : {x: 30, z: 50},
				size: .01,
				orientation: -30,
				rate: 80,
				speed : {
					rotation: .1,
					translation: 1
				},
				material : {
					color: 'brown',
					opacity: 1
				},
				bullets: maxBullets
			},

			default : {
				position : {x: 20, z: 20},
				size: .01,
				orientation: -30,
				rate: 60,
				speed : {
					rotation: .1,
					translation: 1
				},
				material : {
					color: 'gray',
					opacity: 1
				},
				bullets: maxBullets
			},
		},
	}

}
