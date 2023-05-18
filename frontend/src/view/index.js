import React, {Suspense} from 'react'
import {Canvas} from  '@react-three/fiber'

import Maze from './maze'

import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style}>
			<Suspense fallback={null}>
				<Canvas style={style.scene} shadows>
					<Maze data={state.system.maze} />
				</Canvas>
			</Suspense>
		</div>
}

export default View
