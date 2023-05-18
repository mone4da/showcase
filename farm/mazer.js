
let generate = (width, height, entry, exit, ratio, randomizer, drilling) => {
	let initialize = () => {
		let data = [...Array(width)]
				.map(() => [...Array(height)]
				.map(() => 1))

		data[entry.y][entry.x] = 0
		data[exit.y][exit.x] = 0

		return data
	}

	let gate = pos => (pos.x === entry.x && pos.y === entry.y) || (pos.x === exit.x && pos.y === exit.y)

	let randomPos = v => Math.floor(Math.random()*v.length)

	let inside = p => p.x > 0 && p.x < width-1 && p.y > 0 && p.y < height-1

	let visited = p => !data[p.x][p.y]

	let vecinity = (pos, step) => {
		return [
			{x: pos.x, y: pos.y - step},
			{x: pos.x + step, y:  pos.y},
			{x: pos.x,y : pos.y + step },
			{x: pos.x - step, y: pos.y}
		].filter(p => inside(p) && !visited(p))
	}

	let mazerize = (pos, mind) => {
		if (gate(pos) || mind <= 0)
			return

		data[pos.x][pos.y] = 0

		for (n of vecinity(pos,2))
			Math.random() > drilling && mazerize(n, mind-1)

	}

	let data = initialize()
	mazerize(entry, ratio)
	mazerize(exit, ratio)

	for(let i = 0; i<randomizer; i++)
		mazerize({
			x: Math.floor(Math.random()*(width-2)) + 1,
			y: Math.floor(Math.random()*(height-2)) + 1
		},
		ratio)

	return data
}

module.exports = generate
