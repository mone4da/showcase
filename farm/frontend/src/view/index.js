import React, {Suspense} from 'react'
import {Canvas} from  '@react-three/fiber'

import Maze from './maze'

import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style}>
			<Suspense fallback={null}>
				<Canvas style={style.scene} shadows>
					<Maze
						data={state.system.maze}
						chickens={state.system.chickens}
						impacts = {state.system.impacts}
						targets = {state.user.targets}
						player = {state.user.player}
						event={event}
					/>
				</Canvas>
			</Suspense>
		</div>
}

export default View
