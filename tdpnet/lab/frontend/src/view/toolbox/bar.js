
const style = {
	width: '30px',
	height: '30px',
	background: 'white',
	cursor: 'pointer'
}

const Bar = props => {
	let {onDragging} = props

	let handleMouse = down => {
		onDragging && onDragging(down)
	}

	return <div style={style}
			onMouseDown = {() => handleMouse(true)}
			onMouseUp={() => handleMouse(false)}>
		</div>
}

export default Bar
