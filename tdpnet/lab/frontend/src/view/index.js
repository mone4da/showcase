import React from 'react'
import style from './style'
import Network from './network'
import ReactResizeDetector from 'react-resize-detector'

let View = props => {
	let {state, event, onUpdate} = props

	return <div style={style}>
			<ReactResizeDetector handleWidth handleHeight>
				{({ width, height }) =>
					<Network
						size={{width, height}}
						style={style.network}
						data = {state.data}
					/>
				}
			</ReactResizeDetector>
		</div>
}

export default View
