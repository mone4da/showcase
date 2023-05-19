import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {useState} from 'react'

import useKeyboard from './useKeyboard'

let control = {
	target : [0, .35, 0],
	angle: 1.45
}

let camera = {
	fov: 50,
	position : [3, 2, 5]
}

let space = [4, 1, 4]

let material = {
	color: '#00FF00'
}

const Wall = props => {
		let {x,h,z} = props

return	<mesh position={[x,0,z]}>
		<boxGeometry args={ [1,.4*h,1] } />
		<meshBasicMaterial color={h ? 'green' : 'black'} />
	</mesh>

}

const Target = props => {
		let {data} = props

	return	<mesh position={[data.position.x,0,data.position.z]}>
			<boxGeometry args={ [.3,.3,.3] } />
			<meshBasicMaterial color={data.material.color} />
		</mesh>
	}

const Player = props => {
		let {position, material} = props

	return	<mesh position={[position.x,0,position.z]}>
			<boxGeometry args={ [.3,.3,.3] } />
			<meshBasicMaterial color={material.color} />
		</mesh>
}


const Chicken = props => {
		let {data} = props

	return	<mesh position={[data.position.x,0,data.position.z]}>
			<boxGeometry args={ [.3,.3,.3] } />
			<meshBasicMaterial color={data.material.color} />
		</mesh>
}

let moveTo = (data, code, p) => {
	let tryPosition = (old, p) => data[p.z][p.x] ? old : p

	switch(code){
		case 'ArrowUp' : return tryPosition(p, {x: p.x, z: p.z + 1});
		case 'ArrowDown' : return tryPosition(p, {x: p.x, z: p.z -1});
		case 'ArrowLeft' : return tryPosition(p, {x: p.x - 1, z: p.z})
		case 'ArrowRight' : return tryPosition(p, {x: p.x + 1, z: p.z})
	}
}

const Maze = props => {
	let {data, player, targets, chickens} = props

	let [position, setPosition] = useState(player.position)

	useKeyboard(
		code  => setPosition(p => moveTo(data, code, p))
	)


	return <>
			<OrbitControls target={control.target} maxPolarAngle={control.angle} enableDamping={false} />
			<PerspectiveCamera makeDefault fov={camera.fov} position={camera.position} />

			{ data.map( (row, r) => row.map((w,c) => <Wall x={c} h={w} z={r} /> )) }

			{ targets.map(data => <Target data={data} /> ) }

			{ chickens.map(data => <Chicken data={data} /> ) }

			<Player position={position} material={player.material} />

		</>
}

export default Maze
