
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'

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

return		<mesh position={[x,0,z]}>
			<boxGeometry args={ [1,h,1] } />
			<meshBasicMaterial color={h ? 'green' : 'black'} />
		</mesh>

}

const Maze = props => {
	let {data} = props

	return <>
			<OrbitControls target={control.target} maxPolarAngle={control.angle} enableDamping={false} />
			<PerspectiveCamera makeDefault fov={camera.fov} position={camera.position} />

			{ data.map( (row, r) => row.map((w,c) => <Wall x={c} h={w} z={r} /> )) }
		</>
}

export default Maze
