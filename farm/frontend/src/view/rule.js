
let inside = (x,y) => x > 0 && y > 0
let outside = (x,y) => !inside(x,y)

const nodir = {dx:0, dz:0}

let newDirection = (data, code, p) => {

	let tryDirection = d => {
		let z = p.z + d.dz
		let x = p.x + d.dx

		return outside(x,z) || data[z][x] ? nodir : d
	}

	switch(code){
		case 'ArrowUp' : return tryDirection({dx: 0, dz: -1})
		case 'ArrowDown' : return tryDirection({dx: 0, dz: 1})
		case 'ArrowLeft' : return tryDirection({dx: -1, dz: 0})
		case 'ArrowRight' : return tryDirection({dx: 1, dz: 0})
		default : return nodir
	}
}

let newPosition = (data, code, p) => {
		let d = newDirection(data, code, p)
		return {x: p.x + d.dx, z: p.z + d.dz}
}


const Player = props => {
	let {position, material} = props

	return	<rect
			x={position.x + .1}
			y={position.z + .1}
			width='.8'
			height='.8'
			fill={material.color}
		/>
}


export {
	Player,
	newPosition
}
