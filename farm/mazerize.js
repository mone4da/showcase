const config = require('./config').maze.params

const generate = require('./mazer')

let maze = generate(
	config.width,
	config.height,
	config.entry,
	config.exit,
	config.ratio,
	config.randomizer,
	config.drilling)

	console.log( maze )

