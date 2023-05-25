
import {Chicken} from './basic'

let list = [] //['rufus','gunter','mona']

const Chickens = props => {
	let {players, onFire} = props
	let size = .02

	return <>
			{list.map(id => <Chicken id={id} players={players} size={size} onFire={onFire}/>)}
		</>
}


export {
	Chickens
}

