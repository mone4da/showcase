
const Impact = props => {
	let {position} = props

	return position && <circle cx={position.x} cy={position.z} fill='red'>
		<animate
		      attributeName="r"
		      values="0;3;0"
		      dur="2s"
			repeatCount='indefinite'/>
	</circle>
}

export {
	Impact
}
