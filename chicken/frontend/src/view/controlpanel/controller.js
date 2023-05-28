

const Translation = props => {
	let style = {
		width: '100%',
		height: '100%'
	}
	return <svg style={style}>
			<circle cx='50%' cy='50%' r='25%' fill='white'/>
			<circle cx='50%' cy='50%' r='10%' fill='#090909'/>
		</svg>
}

const Rotation = props => {
	return <svg>
			<circle cx='50%' cy='50%' r='30%' fill='white'/>
			<circle cx='50%' cy='50%' r='10%' fill='#090909'/>
		</svg>
}

const Controller = props => {
	let {style} = props
	return <div style={style}>
			<Translation />

			<div style={style.rotation}>
				<Rotation />
				<Rotation />
			</div>
		</div>
}

export default Controller
