
let getTarget = data => {
	let {position, orientation} = data

	let rad = (orientation - 90) * Math.PI/180
	let cos = Math.cos(rad)
	let sin = Math.sin(rad)

	let d = 10

	return {x: position.x + d * cos, z: position.z + d * sin }
}

const color = '#E25822'

const Impact = props => {
	let {data} = props

	let target = data.position && getTarget(data)

	return target && <circle cx={target.x} cy={target.z} fill={color}>
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
