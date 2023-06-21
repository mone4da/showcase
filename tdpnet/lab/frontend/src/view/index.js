import {useState} from 'react'
import ReactResizeDetector from 'react-resize-detector'

import style from './style'
import Network from './network'
import Toolbox from './toolbox'
import Tool from './tool'

let View = props => {
	let {state, event, onUpdate} = props

	let [tools, setTools] = useState([])

	let handleToolbooxSelection = id => {
		setTools(tools => tools.indexOf(id) < 0 ? [...tools, id] : tools)
	}

	return <div style={style}>
			<ReactResizeDetector handleWidth handleHeight>
				{({ width, height }) =>
					<>
						<Network
							size={{width, height}}
							style={style.network}
							data = {state.data}
						/>

						<Toolbox
							onSelection={handleToolbooxSelection}
							position={{x: 40, y: 40}}
							size={{width, height}}
							style={style.toolbox}
						/>

						<Tool
							size={{width, height}}
							style={style.tool}
							tools={tools} />
					</>
				}
			</ReactResizeDetector>
		</div>
}

export default View
