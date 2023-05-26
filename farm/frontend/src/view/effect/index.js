
let getTarget = (data, scale, power) => {
	let {position, orientation} = data

	let rad = (orientation - 90) * Math.PI/180
	let cos = Math.cos(rad)
	let sin = Math.sin(rad)


	return {x: position.x + power * scale.x * cos, z: position.z + power * scale.y * sin }
}

let distance = (a,b) => {
	let dx = a.x - b.x
	let dz = a.z - b.z
	return Math.sqrt(dx * dx + dz * dz)
}

const color = '#E25822'
const power = .5

const Impact = props => {
	let {data, scale, player, onHit} = props

	let target = data.position && getTarget(data, scale, power)

	target &&  distance(target, player) < 2 && onHit && onHit()

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
