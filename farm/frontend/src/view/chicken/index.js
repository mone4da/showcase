
import {Chicken} from './basic'

const Chickens = props => {
	let {list, players, onFire} = props
	let size = .02

	return <>
			{Object.values(list).map(setting => <Chicken setting={setting} players={players} onFire={onFire}/>)}
		</>
}


export {
	Chickens
}

