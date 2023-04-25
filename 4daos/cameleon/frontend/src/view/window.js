let Content = props => {
	let {event} = props

	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: 'gray'
	}


	return <div style={style} >
		</div>
}

const Window = props => {
	let {Component, event, asset, offset, onFocused, onDragged, onClose} = props


	return <Component.Window
			width={360} 
			height={100}
			offset={offset}
			onFocused={onFocused}
			onDragged={onDragged}
			icon={asset.icon}>
		<Content event={event} onClose={onClose} />
	</Component.Window>
}

export default Window
