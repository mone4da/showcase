import {useEffect, useState} from 'react'

import {Chickens} from './chicken'
import {Fire, Impact} from './effect'
import {Player, newPosition} from './rule'
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

const Walls = props => {
	let {data, visible} = props
	return <>
			{visible && data.map( (row, r) => row.map((w,c) => <Wall x={c} h={w} z={r} /> ))}
		</>
}

let Maze = props => {
	let {data, firerate, style, player} = props

	let [position, setPosition] = useState(player.position)
	let [fire, setFire] = useState({from: null, to: null})

	let width = data[0].length
	let height = data.length

	let scale = {
		x : style.width/width,
		y: style.height/height
	}

	let handleFire = (from, to) => {
		setFire({from, to})
	}

	let handleKeydown = code => {
		setPosition(position => newPosition(data, code, position))
	}

	useKeyboard({
		onKeydown : code => handleKeydown(code)
	})

	useEffect(()=>{
		return ()=>{
			setTimeout(() => setFire({from: null, to: null}), 1000)
		}
	}, [fire])

	return <svg style={style} >
			<g transform={`scale(${scale.x},${scale.y})`}>
				<Walls data={data} visible={true} />

				<Player position={position} material={player.material} />

				<Chickens players={[position]} rate={firerate} onFire={handleFire} />

				<Impact position={fire.to} />
			</g>
		</svg>
}

export default Maze
