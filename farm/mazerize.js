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

let wall = '■'
let space = ' '

//console.log(maze.map(row => row.map(v => v ? wall : space).join('')).join('\n'))'

console.log( maze )

