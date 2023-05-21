import React from 'react'
import Maze from './maze'

import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style}>
			<Maze
				style={style.scene}
				data={state.system.maze}
				chickens={state.system.chickens}
				impacts = {state.system.impacts}
				targets = {state.user.targets}
				player = {state.user.player}
				event={event}
			/>
		</div>
}

export default View
