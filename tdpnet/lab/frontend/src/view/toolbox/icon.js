
const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '30px',
	height: '30px',
	background: 'orange',
	color: 'black',
	cursor: 'pointer',
	fontWeight: 'bold',
	border: '2px solid black'
}

const Icon = props => {
	let {id, onSelection} = props

	let handleClick = () => {
		onSelection && onSelection(id)
	}

	return <div style={style} onClick={handleClick}>{id}</div>
}

export default Icon
