module.exports = {
	port: 11000,
	content: './frontend/build',

	network: {
		path: {
			e: './edge.js',
			b: './node.js'
		}
	}
}
