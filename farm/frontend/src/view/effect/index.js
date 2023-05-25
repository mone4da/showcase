
let getTarget = data => {
	let {position, orientation} = data

	let rad = orientation * 3.14/180
	let cos = Math.cos(rad)
	let sin = Math.sin(rad)

	let d = 1

	return {x: position.x + d * cos, z: position.z + d * sin }
}

const Impact = props => {
	let {data} = props

	let target = data.position && getTarget(data)

	return target && <circle cx={target.x} cy={target.z} fill='red'>
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
