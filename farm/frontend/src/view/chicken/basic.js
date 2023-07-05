import {useState} from 'react'

let distance = (a,b) => {
	let dx = a.x - b.x
	let dz = a.z - b.z
	return Math.sqrt(dx * dx + dz * dz)
}

let center = positions => {
	let c = positions.reduce((a,p) => ({x: a.x + p.x, z: a.z + p.z}), {x:0, z:0})
	return {x: c.x/positions.length, z: c.z/positions.length}
}

let rotation =  (a,b) => {
}

const Head = props => {
	let {color} = props
	return	<>
			<g transform='translate(300 50) rotate(45)'>
				<rect	width='15%'
					height='15%'
					fill={color}
				/>
			</g>

			<circle
				cx='50%'
				cy='30%'
				r='15%'
				fill={color}
			/>
		</>

}


const Body = props => {
	let {color} = props
	return 	<circle
			cx='50%'
			cy='70%'
			r='30%'
			fill={color}
		/>

}

const Outfit = props => {
	return <>
			<ellipse
				cx='42%'
				cy='20%'
				rx='6%'
				ry='2%'
				fill='black'
			/>

			<ellipse
				cx='56%'
				cy='20%'
				rx='6%'
				ry='2%'
				fill='black'
			/>
		</>
}

const Ammo = props => {
	let {bullets, max} = props

	let bullet = i => (
			<ellipse
					cx={`${23 + 6*i}%`}
					cy='70%'
					rx='2%'
					ry='6%'
					fill='#33C5FF'
				/>
	)

	let empty = i => (
			<ellipse
					cx={`${23 + 6*i}%`}
					cy='70%'
					rx='2%'
					ry='6%'
					stroke='#33C5FF'
					fill='black'
				/>
	)

	let items = [...Array(max)]
	return <>
			{ items.map((_,i) => i < bullets ? bullet(i) : empty(i)) }
		</>
}

let fire = (position, orientation, rate, bullets, players, onFire) => {
	for (let player of players)
		if (bullets && Math.random()*1000 < rate){
			onFire({position, orientation})
		}
}

let scan = (position, target, max, onSeek) => {
	let d = distance(position, target)
	(0 < d && d < max) && onSeek({x: (target.x - position.x)/10, z: (target.z - position.z)/10}, rotation(position, target))
}

const Chicken = props => {
	let {setting, players, size, onFire, onSeek} = props

	let [position, setPosition] = useState(setting.position)
	let [orientation, setOrientation] = useState(setting.orientation)
	let [bullets, setBullets] = useState(setting.bullets)

	setTimeout(() => setOrientation(o => o + setting.speed.rotation), 100)

	let handleFire = data => {
		onFire && onFire(data)
	}

	let handleSeek = (delta, cita) => {
		let no = orientation + cita
		let np = {x: position.x + delta.x, z: position.z + delta.z}

		setOrientation(no)
		setPosition(np)
		onSeek && onSeek({position: np, orientation: no})
	}

	scan(position, center(players), handleSeek)

	fire(position, orientation, setting.rate, bullets, players, handleFire)

	return 	<g transform={`translate(${position.x}, ${position.z}) scale(${setting.size}, ${setting.size}) rotate(${orientation})`}>
			<g transform={`translate(${-300}, ${-300} )`}>
				<Head color={setting.material.color} />

				<Body color={setting.material.color} />

				<Outfit />

				<Ammo bullets={bullets} max={setting.bullets} />
			</g>

		</g>
}


export  {
	Chicken
}
