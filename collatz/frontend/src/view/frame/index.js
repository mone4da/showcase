
const Header = props => {
	let  {logo, state, style} = props

	return <div style={style}>
			<div style={style.logo}>
				<img style={style.logo.image} src={logo} />
			</div>
		</div>
}

const Footer = props => {
	let  {style, state} = props

	return <div style={style}>
			{state.system.copyright}
		</div>
}

export {Header, Footer}
