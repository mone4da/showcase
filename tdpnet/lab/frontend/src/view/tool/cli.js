
import Draggable from 'react-draggable'

const Bar = props => {
	let {onDragging} = props

	const style = {
		width: '30px',
		height: '100%',
		background: 'white',
		cursor: 'pointer'
	}

	let handleMouse = down => {
		onDragging && onDragging(down)
	}

	return <div style={style}
			onMouseDown = {() => handleMouse(true)}
			onMouseUp={() => handleMouse(false)}>
		</div>
}


const GUI = props => {
	let style = {
		width: '100%',
		height: '100%',
		background: 'black',
		color: 'orange'
	}

	return <div style={style}>
		</div>
}

const Cli = props => {
	let {style, position, size, onSelection} = props

	return <Draggable defaultPosition={position}>
			<div style={style}>
				<Bar />
				<GUI />
			</div>
		</Draggable>
}


export 	default Cli
