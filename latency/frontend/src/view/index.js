import React from 'react'
import style from './style'

import Monitor from './monitor'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style}>
			<Monitor
				state={state}
				style={style.monitor}
				event={event}
			 />
		</div>
}

export default View
