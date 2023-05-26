import {useState} from 'react'

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

const Chicken = props => {
	let {setting, players, size, onFire} = props

	let [position, setPosition] = useState(setting.position)
	let [orientation, setOrientation] = useState(setting.orientation)
	let [bullets, setBullets] = useState(setting.bullets)

	setTimeout(() => setOrientation(o => o + setting.speed.rotation), 100)

	for (let player of players)
		if (bullets && Math.random()*1000 < setting.rate && onFire){
			onFire({position, orientation})
			//setBullets(value => value - 1)
			if (!bullets)
				setBullets(setting.bullets)
		}


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
