module.exports = {
	port: 11000,
	content: './frontend/build',

	network: {
		type: {
			e: {
				model: './edge.js',
				view: { color: 'red'}
			},
			b: {
				model: './node.js',
				view: { color: 'black'}
			},
			g: {
				model: './gateway.js',
				view: {color: 'green'}
			},
			r: {
				model: './region.js',
				view: { color: 'blue'}
			},
			ux: {
				model: './ux.js',
				view: { color: '#CCCCCC'}
			}
		}
	}
}
