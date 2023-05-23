
import {Chicken} from './basic'

const Rufus = props => {
	let {players, size, onFire} = props

	return	<Chicken
			id='rufus'
			size={size}
			players={players}
			onFire={onFire}
		/>

}

const Gunter = props => {
	let {players, size, onFire} = props

	return	<Chicken
			id='gunter'
			size={size}
 			players={players}
			onFire={onFire}
		/>
}

const Mona = props => {
	let {players, size, onFire} = props

	return	<Chicken
			id='mona'
			size={size}
 			players={players}
			onFire={onFire}
		/>
}


const Chickens = props => {
	let {players, onFire} = props
	let size = .02

	return <>
			<Rufus players={players} size={size} onFire={onFire} />
			<Gunter players={players} size={size} onFire={onFire}/>
			<Mona players={players} size={size} onFire={onFire}/>
		</>
}


export {
	Rufus,
	Gunter,
	Chickens
}

