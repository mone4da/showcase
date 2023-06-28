module.exports = {
	port: 11000,
	content: './frontend/build',

	network: {
		type: {
			e: {
				model: './element/edge/index.js',
				view: { color: 'red'}
			},
			b: {
				model: './element/bridge/index.js',
				view: { color: '#0E2954'}
			},
			g: {
				model: './element/gateway/index.js',
				view: {color: 'green'}
			},
			r: {
				model: './element/region/index.js',
				view: { color: 'blue'}
			},
			ux: {
				model: './element/ux/index.js',
				view: { color: '#CCCCCC'}
			},
			sp : {
				model: './element/sp/index.js',
				view: { color: '#CE29AA' }
			}
		}
	}
}
