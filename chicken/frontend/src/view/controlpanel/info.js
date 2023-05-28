
const local = {
	style : {
		width: '100%',
		height: '100%',

		text: {
			position: 'absolute',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			font: 'bold 1em arial',
			color: 'white',
			width: '100%',
			height: '30px'
		}
	}
}

const Info = props => {
	let  {max, amos, style} = props

	let amosleft = Math.floor(amos*100/max.amos)

	return <div style={style}>
			<svg style={local.style}>
				<rect y='2%' height='94%' width={`${amosleft}%`} fill='gray' />
			</svg>
			<div style={local.style.text}>
				<label>{amosleft} %</label>
			</div>
		</div>
}

export default Info
