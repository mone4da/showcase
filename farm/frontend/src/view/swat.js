
let euclides = (a,b) => {
	let dx = a.x - b.x
	let dz = a.z - b.z
	return Math.sqrt(dx * dx + dz * dz)
}

let center = positions => {
	let c = positions.reduce((a,p) => ({x: a.x + p.x, z: a.z + p.z}), {x:0, z:0})
	return {x: c.x/positions.length, z: c.z/positions.length}
}

let scalar = (a,b) => a.x*b.x + a.z*b.z

let abs = v => Math.sqrt(scalar(v,v))

let rotation =  (a,b) => {
	let va = {x: b.x - a.x, z: b.z - a.z }
	let vb = {x: .1*va.x, z: .1*va.z}

	let cc = scalar(va,vb) / (abs(va))
	return Math.acos(cc)
}

let scan = (position, target, max, onSeek) => {
	let d = euclides(position, target)
	return (0 < d && d < max)  ? {x: (target.x - position.x)/10, z: (target.z - position.z)/10, r: rotation(position, target)}
				: null
}

let _scan = (position, target, onSeek) => {
	let max = 10
	let d = euclides(position, target)
	if (0 < d && d < max){
		let step = {x: (target.x - position.x)/2, z: (target.z - position.z)/2}
		onSeek(step, rotation(position, target))
	}
}


let step = (a,b, size) => {
	let dx = b.x - a.x < 0 ? -1 : 1
	let dz = b.z - a.z < 0 ? -1 : 1
	return {x : dx, z: dz}
}

let selectSetting = size => Math.floor(Math.random()*size)

let position = (p, t) => {
	let s = step(p,t, 10)
	return {x: p.x + s.x, z: p.z + s.z}
}

let tactic = (deployment, target) => {
	let ids = Object.keys(deployment)
	let id = ids[selectSetting(ids.length)]
	let setting = deployment[id]

	deployment[id].position = position(setting.position, target)

	return deployment
}

export {
	tactic
}
