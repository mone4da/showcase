import {useEffect, useState} from 'react'

import Menu from './menu'
import Controller from './controller'
import Trigger from './trigger'
import Info from './info'

//const maxAmos = 1000000

const ControlPanel = props => {
	let {style, state,event, onUpdate} = props

	let [amos, setAmos] = useState(state.system.setting.max.amos)

	let handleFire = () => {
		setAmos(amos => amos ? amos - 1 : state.system.setting.max.amos)
	}

	useEffect(() => {
		onUpdate && onUpdate(amos - 1, 'fire')
	}, [amos])

	return <div style={style}>
			<Menu
				style={style.menu}
			/>

			<Controller
				style={style.controller}
			/>

			<Trigger
				style={style.trigger}
				onFire={handleFire}
			/>

			<Info
				style={style.info}
				amos={amos}
				max={state.system.setting.max}
			/>
		</div>

}


export default ControlPanel
