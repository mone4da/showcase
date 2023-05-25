import {useState} from 'react'

const maxBullets = 10

const data = {
	rufus : {
		position : {x: 50, z: 30},
		orientation: 0,
		rate: 20,
		material : {
			color: '#0D516C',
			opacity: 1
		},
		bullets: maxBullets
	},

	gunter : {
		position : {x: 30, z: 50},
		orientation: 0,
		rate: 80,
		material : {
			color: 'brown',
			opacity: 1
		},
		bullets: maxBullets
	},

	default : {
		position : {x: 20, z: 20},
		orientation: 0,
		rate: 60,
		material : {
			color: 'gray',
			opacity: 1
		},
		bullets: maxBullets
	},
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
	let {bullets} = props

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

	let items = [...Array(maxBullets)]
	return <>
			{ items.map((_,i) => i < bullets ? bullet(i) : empty(i)) }
		</>
}

const speed = 1

const Chicken = props => {
	let {id, players, size, onFire} = props

	let setting = data[id] || data.default

	let [position, setPosition] = useState(setting.position)
	let [orientation, setOrientation] = useState(setting.orientation)

	setTimeout(() => setOrientation(o => o + speed), 100)

	for (let player of players)
		if (setting.bullets && Math.random()*1000 < setting.rate && onFire){
			onFire(position, player)
			setting.bullets--
			if (!setting.bullets)
				setting.bullets = maxBullets
		}


	return 	<g transform={`translate(${position.x}, ${position.z}) scale(${size}, ${size}) rotate(${orientation})`}>
			<g transform={`translate(${-300}, ${-300} )`}>
				<Head color={setting.material.color} />

				<Body color={setting.material.color} />

				<Outfit />

				<Ammo bullets={setting.bullets} />
			</g>

		</g>
}


export  {
	Chicken
}
