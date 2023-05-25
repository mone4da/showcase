
let initialize = (width, height, entry, exit) => {
	let data = [...Array(height)]
			.map(() => [...Array(width)]
			.map(() => 1))

	data[entry.y][entry.x] = 0
	data[exit.y][exit.x] = 0

	return data
}


let makepath = (data, entry, exit, width, height, depth, drilling) => {
	let isExit = a => a.x === exit.x && a.y === exit.y

	let randomPos = v => Math.floor(Math.random()*v.length)

	let inside = p => p.x > 0 && p.x < width-1 && p.y > 0 && p.y < height-1

	let visited = p => !data[p.y][p.x]

	let vecinity = (pos, step) => {
		return [
			{x: pos.x, y: pos.y - step},
			{x: pos.x + step, y:  pos.y},
			{x: pos.x,y : pos.y + step },
			{x: pos.x - step, y: pos.y}
		]
	}

	let drill = (pos, depth) => {
		if (	visited(pos) ||
			!inside(pos) ||
			isExit(pos) ||
			!depth)

			return

		data[pos.y][pos.x] = 0

		for(let p of vecinity(pos, 1))
			Math.random() >= drilling && drill(p, depth - 1)

	}

	drill(entry, depth)
}

let generate = (width, height, entry, exit, ratio, randomizer, drilling) => {

	let data = initialize( width, height, entry, exit )

	for(let i=0; i<randomizer >> 2; i++){
		makepath(data, entry, exit, width, height, ratio, drilling)
		entry = {x: Math.floor(Math.random()*width), y : Math.floor(Math.random()*height)}
	}


	for(let i=0; i<randomizer >> 2; i++){
		makepath(data, exit, entry, width, height, ratio, drilling)
		exit = {x: Math.floor(Math.random()*width), y : Math.floor(Math.random()*height)}
	}

	return data
}

module.exports = generate


