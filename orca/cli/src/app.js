
import {useState} from 'react'

let sameEvents = (a,b) => {
	return a.source === b.source &&
		JSON.stringify(a.data) === JSON.stringify(b.data)
}

let App = props => {
	let model = props.model
	let View = props.View

	let [state, setState] = useState(model.state)
	let [event, setEvent] = useState({source:'', data:''})

	let handleUpdate = (data,id) => {
		//setState(state => data)
	}

	model.onUpdate = (data, source) => {
		let newEvent = {data, source}
		!sameEvents(event, newEvent) && setEvent(newEvent)
	}

	return (
		<View
			state={state}
			onUpdate = {handleUpdate}
			event={event}
			/>

	)
}

export default App
