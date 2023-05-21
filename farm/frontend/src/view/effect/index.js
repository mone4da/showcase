
const Fire = props => {
	let {from, to} = props
	return from && to && <g>
				<line x1={from.x} y1={from.z} x2={to.x} y2={to.z} stroke='#FF4500' />
			</g>
}

export {
	Fire
}
