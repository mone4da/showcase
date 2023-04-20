
let Content = props => {
	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: '#0C0C0C',

		textarea: {
			width: '100%', 
			height: '100%',
			background: '#0C0C0C',
			color: 'orange',
			resize: 'none',
			margin: 0,
			padding: 0,
			borderStyle: 'none'
		}
	}
	return <div style={style} >
			<textarea style={style.textarea}></textarea>
		</div>
}

const Cli = props => {
	let {Component, event, asset, offset, onFocused, onDragged, onClose} = props


	return <Component.Window
			offset={offset}
			onFocused={onFocused}
			onDragged={onDragged}
			icon={asset.icon}>
		<Content event={event} onClose={onClose} />
</Component.Window>


}

export default Cli
