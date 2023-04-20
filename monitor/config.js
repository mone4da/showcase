module.exports = {
	app : {
		greeting: 'app on',
		port: 3002,
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
		region: 'de',
		regions : [
				{
					id: 'us',
					url: './asset/us.svg',
					name: 'USA',
					position: {x: 20, y: 100},
					location: 'https://us.4digitalasset.com:3002'
				},
				{
					id: 'gb',
					url: 'asset/gb.svg',
					name: 'United Kingdom',
					position: {x: 160, y: 50},
					location: 'https://gb.4digitalasset.com:3002'
				},
				{
					id: 'de',
					url: './asset/de.svg',
					name: 'Germany',
					position: {x: 300, y: 100},
					location: 'https://4digitalasset.com:3002'
				},
				{
					id: 'sg',
					url: './asset/sg.svg',
					name: 'Singapore',
					position: {x: 300, y: 200},
					location: 'https://sin.4digitalasset.com:3002'
				},
				{
					id: 'au',
					url: './asset/au.svg',
					name: 'Australia',
					position: {x: 20, y: 200},
					location: 'https://au.4digitalasset.com:3002'
				}
		]
	},

	network: {
		family: 'udp4'
	}
}
