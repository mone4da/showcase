import {useState} from 'react'

const data = {
	rufus : {
		position : {x: 60, z: 60},
		rate: 20,
		material : {
			color: '#0D516C',
			opacity: 1
		}
	},

	gunter : {
		position : {x: 40, z: 40},
		rate: 80,
		material : {
			color: 'brown',
			opacity: 1
		}
	},

	default : {
		position : {x: 20, z: 20},
		rate: 60,
		material : {
			color: 'gray',
			opacity: 1
		}
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

	let items = [...Array(10)]
	return <>
			{items.map((_,i) =>
				<ellipse
					cx={`${23 + 6*i}%`}
					cy='70%'
					rx='2%'
					ry='6%'
					fill='#33C5FF'
				/>)
			}
		</>
}

const Chicken = props => {
	let {id, players, size, onFire} = props

	let setting = data[id] || data.default

	let [position, setPosition] = useState(setting.position)

	for (let player of players)
		Math.random()*1000 < setting.rate && onFire && onFire(position, player)

	return 	<g transform={`translate(${position.x}, ${position.z}) scale(${size}, ${size})`}>

			<Head color={setting.material.color} />

			<Body color={setting.material.color} />

			<Outfit />

			<Ammo />

		</g>
}


export  {
	Chicken
}
