import React from 'react'
import Maze from './maze'
import ControlPanel from './controlpanel'

import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	let handleMaze = pos => {
		onUpdate && onUpdate(pos, 'move')
	}

	let handleControlPanel = (data, id) => {
		onUpdate && onUpdate({data, id}, 'cp')
	}

	return <div style={style}>
			<Maze
				style={style.scene}
				data={state.system.maze}
				chickens={state.system.chickens}
				impacts = {state.system.impacts}
				targets = {state.user.targets}
				player = {state.user.player}
				firerate = {state.system.setting.firerate}
				event={event}
				onMove = {handleMaze}
			/>

			<ControlPanel
				style={style.controlpanel}
				onUpdate = {handleControlPanel}
			 />
		</div>
}

export default View
