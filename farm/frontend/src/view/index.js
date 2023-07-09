import {useState} from 'react'

import {tactic} from './swat'
import Maze from './maze'
import ControlPanel from './controlpanel'

import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	let [chickens, setChickens] = useState(state.system.chickens)

	let handleMaze = (pos,id) => {
		if (id === 'maze')
			setChickens(deployment => tactic(deployment, pos))

		onUpdate && onUpdate(pos, id)
	}

	let handleControlPanel = (data, id) => {
		onUpdate && onUpdate({data, id}, 'cp')
	}

	return <div style={style}>
			<Maze
				style={style.scene}
				data={state.system.maze}
				gate={state.system.exit}
				chickens={chickens}
				impacts = {state.system.impacts}
				targets = {state.user.targets}
				player = {state.user.player}
				firerate = {state.system.setting.firerate}
				event={event}
				onMove = {pos => handleMaze(pos, 'move')}
				onExit={pos => handleMaze(pos, 'exit')}
			/>

			<ControlPanel
				style={style.controlpanel}
				onUpdate = {handleControlPanel}
			 />
		</div>
}

export default View
