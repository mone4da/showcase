const config = {
	width : 30,
	height : 30,
	entry: {x: 0, y: 7},
	exit: {x: 29, y: 26},
	ratio: 100,
	randomizer: 1500,
	drilling: .8
}

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

