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
			key: 'EEEEEEEE-00000000AC',
			password: '8393e284-da0d-11ed-8907-005056492a84',
			address: 'EEEEEEEE-00000000AC',
		  }
	},

	netlatency: {
		source: 'https://au.4digitalasset.com:1445/latency'
	}
}
