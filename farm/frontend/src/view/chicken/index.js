
import {Chicken} from './basic'

const Chickens = props => {
	let {list, players, onFire} = props
	let size = .02

	console.log('Chickens', list)

	return <>
			{Object.values(list).map(setting => <Chicken setting={setting} players={players} onFire={onFire} />)}
		</>
}


export {
	Chickens
}

