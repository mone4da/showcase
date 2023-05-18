
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'

const Maze = props => {
	let control = {
		target : [0, .35, 0],
		angle: 1.45
	}

	let camera = {
		fov: 50,
		position : [3, 2, 5]
	}

	let space = [1, 1, 1]
	return <>
			<OrbitControls target={control.target} maxPolarAngle={control.angle} />

			<PerspectiveCamera makeDefault fov={camera.fov} position={camera.position} />

			<mesh>
				<boxGeometry args={space} />
				<meshBasicMaterial color={'red'} />
			</mesh>
		</>
}

export default Maze
