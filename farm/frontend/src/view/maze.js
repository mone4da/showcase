import {useState} from 'react'
import {Rufus, Gunter} from './chicken'
import {Fire} from './effect'
import useKeyboard from './useKeyboard'

const Chickens = props => {
	let {players, rate, onFire} = props
	return <>
			{/*<Rufus players={players} onFire={onFire} />*/}
			<Gunter players={players} rate={rate} onFire={onFire}/>
		</>
}

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

const Walls = props => {
	let {data} = props
	return <>
			{data.map( (row, r) => row.map((w,c) => <Wall x={c} h={w} z={r} /> ))}
		</>
}

let Maze = props => {
	let {data, style, player} = props

	let [position, setPosition] = useState(player.position)
	let [fire, setFire] = useState({from: null, to: null})

	let width = data[0].length
	let height = data.length

	let scale = {
		x : style.width/width,
		y: style.height/height
	}

	let handleFire = (from, to) => {
		console.log(from, to)
		setFire({from, to})
	}

	useKeyboard({
		onPressing : code  => setPosition(p => moveTo(data, code, p))
	})

	return <svg style={style} >
			<g transform={`scale(${scale.x},${scale.y})`}>

				<Walls data={data} />

				<Player position={position} material={player.material} />

				<Chickens players={[position]} rate={20} onFire={handleFire} />

				<Fire from={fire.from} to={fire.to} />
			</g>
		</svg>
}

export default Maze
