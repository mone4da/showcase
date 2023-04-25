import {useState} from 'react'

import Component from './component'
import AppManager from './appmanager'
import {Copyright} from './organisation'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	let [appTypes, setAppTypes] = useState(state.user.apps)

	let handleMenu = type => {
		setAppTypes( list =>  [...list,  type])
	}

	let handleFocused = id => {
		setAppTypes(list =>  [...list.filter(type => type !== id), id] )
	}


	let handleClose = id => {
		setAppTypes( list => list.filter(type => type !== id) )
	}

	let handleCommand = data => {
		onUpdate && onUpdate('command', data)
	}

	return (
		<div style={style}>
			<Copyright
				style={style.organisation.copyright}
				content={state.system.copyright}
			/>

			<AppManager
				types={appTypes}
				Component={Component}
				state={state}
				style={style}
				asset={asset}
				event={event}
				onCommand={handleCommand}
				onFocused={handleFocused}
				onClose={handleClose}/>

		</div>
	)
}

export default View
