
const Header = props => {
	let  {logo, state, style} = props

	return <div style={style}>
			<div style={style.logo}>
				<img style={style.logo.image} src={logo} />
			</div>

			<div><a style={{color: 'white'}} href='https://github.com/mone4da/showcase'>Collatz at github</a></div>
			<div>Author: Samuel Ferrer Colás from Havana, Cuba (born 1964)</div>
		</div>
}

const Footer = props => {
	let  {style, state} = props

	return <div style={style}>
			{state.system.copyright}
		</div>
}

export {Header, Footer}
