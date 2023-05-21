import {useState} from 'react'
import {Rufus, Gunter} from './chicken'
import useKeyboard from './useKeyboard'

const Wall = props => {
		let {x,h,z} = props

	return <rect
			x={x}
			y={z}
			width={1}
			height={1}
			fill={h ? 'green' : ' black'} 
		/>
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

let moveTo = (data, code, p) => {
	let tryPosition = (old, p) => data[p.z][p.x] ? old : p

	switch(code){
		case 'ArrowUp' : return tryPosition(p, {x: p.x, z: p.z - 1})
		case 'ArrowDown' : return tryPosition(p, {x: p.x, z: p.z + 1})
		case 'ArrowLeft' : return tryPosition(p, {x: p.x - 1, z: p.z})
		case 'ArrowRight' : return tryPosition(p, {x: p.x + 1, z: p.z})
		default : return p
	}
}



let Maze = props => {
	let {data, style, player} = props

	let [position, setPosition] = useState(player.position)

	let width = data[0].length
	let height = data.length

	let scale = {
		x : style.width/width,
		y: style.height/height
	}

	useKeyboard(
		code  => setPosition(p => moveTo(data, code, p))
	)

	return <svg style={style} >
			<g transform={`scale(${scale.x},${scale.y})`}>
				{data.map( (row, r) => row.map((w,c) => <Wall x={c} h={w} z={r} /> ))}

				<Player position={position} material={player.material} />
			</g>
		</svg>
}

export default Maze
