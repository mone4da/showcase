
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
		display: 'grid',
		gridTemplateRows: '80% 2px auto',
		width: '100%',
		height: '100%',
		background: 'black',
		color: 'orange',

		response: {
			resize: 'none',
			width: '98%',
			height: '95%',
			border: 'none',
			outline: 'none',
			background: 'black',
			color: 'orange'
		},

		query: {
			resize: 'none',
			width: '98%',
			height: '93%',
			border: 'none',
			outline: 'none',
			background: 'black',
			color: 'orange'
		},

		division: {
			background: 'orange',
			width: '100%',
			height: '2px'
		}
	}

	return <div style={style}>
			<textarea readOnly style={style.response} />
			<div style={style.division} />
			<textarea style={style.query} />
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
