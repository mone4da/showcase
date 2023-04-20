module.exports = {
	app : {
		greeting: 'app on',
		port: 8080,
		content: './frontend/build',

		security: {
			key: './security/key.pem',
			cert: './security/cert.pem'
		}
	},

	sessionmanager : {
		greeting: 'session manager on'
	},

	session: {
		copyright: '4 Digital Asset © 2023 - Blackscreen console',
		time: Date.now(),
		region: {
			id: 'de',
			name: 'Germany',
			icon: './asset/de.svg'
		},

		apps : ['histogram','cli']
	},

	network: {
		family: 'udp4'
	},

	netgate: {
		connection: {
			host: 'https://au.4digitalasset.com:1443',
			path: '/',
			options: {
			  transports: ['websocket', 'polling']
			}
		  },
		
		  credentials: {
			key: 'EEEEE0000AC',
			password: '',
			address: 'EE0000AC',
		  }
	},

	netlatency: {
		source: 'https://4digitalasset.com:1445/latency'
	}
}
