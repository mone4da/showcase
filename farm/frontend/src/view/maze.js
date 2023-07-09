import {useEffect, useState} from 'react'

import {Chickens} from './chicken'
import {Fire, Impact} from './effect'
import {Player, newPosition} from './rule'
import {tactic} from './swat'
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
	let {data, gate, chickens, firerate, style, player, onMove, onExit} = props

	let [position, setPosition] = useState(player.position)
	let [fire, setFire] = useState({position: null, orientation: null})
	let [chickenDeployment, setChickenDeployment] = useState(chickens)

	let width = data[0].length
	let height = data.length

	let scale = {
		x : style.width/width,
		y: style.height/height
	}

	let handleFire = (data) => {
		setFire(data)
	}

	let handleHit = () => {
		console.log('I am hit!')
	}

	let handleKeydown = code => {
		let pos = newPosition(data, code, position)

		if (pos.x === gate.x && pos.z === gate.z){
			onExit && onExit(pos)
			return
		}

		setPosition(position => pos)

		//setChickenDeployment(deployment => tactic(deployment, pos))

		onMove && onMove(pos)
	}

	useKeyboard({
		onKeydown : code => handleKeydown(code)
	})

	useEffect(()=>{
		return ()=>{
			setTimeout(() => setFire({position: null, orientation: null}), 1000)
		}
	}, [fire])

	return <svg style={style} >
			<g transform={`scale(${scale.x},${scale.y})`}>
				<Walls data={data} visible={true} />

				<Player position={position} material={player.material} />

				<Chickens list={chickenDeployment} players={[position]} rate={firerate} onFire={handleFire} />

				<Impact data={fire} scale={scale} player={position} onHit={handleHit} />
			</g>
		</svg>
}

export default Maze
