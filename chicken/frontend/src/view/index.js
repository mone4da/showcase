import React from 'react'
import ControlPanel from './controlpanel'
import style from './style'

let View = props => {
	let {state, event, onUpdate} = props

	let handleControlPanel = (data, id) => {
		onUpdate && onUpdate(data, id)
	}

	return <div style={style}>
			<ControlPanel
				state={state}
				style={style.controlpanel}
				onUpdate = {handleControlPanel}
				event={event}
			 />
		</div>
}

export default View
