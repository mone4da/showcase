
let Content = props => {
	let {event, onCommand} = props

	const style = {
		display:'grid',
		columnGridTemplate: '80% 20%',
		width: '100%',
		height: '100%',
		background: '#0C0C0C',

		response: {
			width: '100%', 
			height: '100%',
			background: '#0C0C0C',
			color: 'orange',
			resize: 'none',
			margin: 0,
			padding: 0,
			borderStyle: 'none'
		},

		command: {
			width: '100%',
			height: '100%',
			background: '#0C0C0C',
			color: 'orange',
			resize: 'none',
			margin: 0,
			padding: 0,
			borderStyle: 'solid lightblue 1px'
		}

 	}

	let handleKeyUp = e => {
		e.code === 'Enter' && onCommand && onCommand(e.target.value)
	}

	return <div style={style} >
			<textarea style={style.response} />
			<textarea style={style.command} onKeyUp={handleKeyUp} />
		</div>
}

const Cli = props => {
	let {Component, event, asset, offset, onFocused, onDragged, onClose, onCommand} = props

	let handleCommand = data => {
		onCommand && onCommand(data)
	}

	return <Component.Window
			offset={offset}
			onFocused={onFocused}
			onDragged={onDragged}
			icon={asset.icon}>
		<Content
			event={event}
			onCommand={handleCommand}
			onClose={onClose} />
</Component.Window>


}

export default Cli
