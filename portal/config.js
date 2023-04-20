module.exports = {
	app : {
		greeting: 'app on',
		port: 443,
		content: './web',

		security: {
			key: '../security/key.pem',
			cert: '../security/cert.pem'
		}
	},

	sessionmanager : {
		greeting: 'session manager on'
	},

	session: {
		copyright: '4 Digital Asset © 2023',
		time: Date.now(),
		region: {
			id: 'de',
			name: 'Germany',
			icon: './asset/de.svg'
		}
	},

	network: {
		family: 'udp4'
	}
}
