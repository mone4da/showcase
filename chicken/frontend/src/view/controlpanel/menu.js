
const local = {
	style: {
		width: '200px'
	}
}

const Menu = props => {
	let {style, chickens, onSelection} = props
	return <div style={style}>
			<select style={local.style}>
				{ Object.keys(chickens).map(key => <option key={key}>{chickens[key].name}</option>) }
			</select>
		</div>
}

export default Menu
