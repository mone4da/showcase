import React from 'react'
import style from './style'
import Component from './component'
import Monitor from './monitor'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style.monitor}>
			<Monitor
				Component={Component}
				state={state}
				event={event}
			 />
		</div>
}

export default View
