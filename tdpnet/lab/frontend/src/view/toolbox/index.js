
import Draggable from 'react-draggable'

import Bar from './bar'
import Icon from './icon'

const Toolbox = props => {
	let {style, position, size, onSelection} = props

	let handleDragging = on => {
	}

	let handleSelection = id => {
		onSelection && onSelection(id)
	}

	return <Draggable defaultPosition={position}>
			<div style={style}>
				<Bar onDragging={handleDragging} />
				<Icon id='P' onSelection={handleSelection}/>
				<Icon id='A' onSelection={handleSelection}/>
				<Icon id='B' onSelection={handleSelection}/>
				<Icon id='C' onSelection={handleSelection}/>
				<Icon id='>' onSelection={handleSelection}/>
			</div>
		</Draggable>
}


export 	default Toolbox
