import Draggable from 'react-draggable'


let Toolbar = props => {
	let offset = props.offset || {x:0, y:0}

	let handleFocus = () => {
	}

	return	<Draggable defaultPosition={offset}>
			<div style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			position: 'absolute',

			height: props.height || '30px',
			width: props.width || '60px',

			padding: '2px',

			border: 'solid black 1px',
			borderRadius: '2px',

			userSelect: 'none',
			backgroundColor: 'white'
			}}
			tabIndex = {props.tabIndex || 0}
			onFocus={handleFocus}
			onClick={e => e.stopPropagation()}>
				{props.children}
			</div>
		</Draggable>

}


let Button = props => {
	let handleClick = e => {
		props.onClick && props.onClick()
		e.stopPropagation()
	}

	return <img
			style = {{
				height: props.height || '30px',
				width: props.width || '30px',
				cursor: 'pointer'
			}}
			src = {props.icon}
			onClick = {e => handleClick(e) }
		/>
}

let Icon = props => {
	return <img
			style = {{
				pointerEvents: 'none',
				height: props.height || '30px',
				width: props.width || '30px',
			}}
			src = {props.icon}
		/>
}


export {
	Toolbar,
	Button,
	Icon
}
