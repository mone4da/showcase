
import {useState} from 'react'

const Rufus = props => {
	let {players, rate, onFire} = props

	let [position, setPosition] = useState({x:60, z: 60})

	for (let player of players)
		Math.random()*1000 < rate && onFire && onFire(position, player)

	return	<circle
			cx={position.x}
			cy={position.z}
			r='20'
			fill={'red'}
			fillOpacity={.6}
		/>

}

const Gunter = props => {
	let {players, rate, onFire} = props

	let [position, setPosition] = useState({x:20, z: 66})

	for (let player of players)
		Math.random()*1000 < rate && onFire && onFire(position, player)


	return	<circle
			cx={position.x}
			cy={position.z}
			r='20'
			fill={'blue'}
			fillOpacity={.6}
		/>

}

export {
	Rufus,
	Gunter
}

