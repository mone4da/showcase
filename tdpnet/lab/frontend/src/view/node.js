import {useState} from 'react'
import Draggable from 'react-draggable'

const Node = props => {
	let {id, label, pos, r, onDragging} = props

	let [position, setPosition] = useState(pos)

	let handleDrag = e => {
		let newposition = {x: position.x + e.movementX, y: position.y + e.movementY}
		onDragging && onDragging(id, newposition)
		setPosition(newposition)
	}

	return <Draggable
			position={position}
			onDrag={handleDrag}>
				<circle
					cx = {r}
					cy = {r}
					r={r}
					fill='black'
					style={{cursor: 'pointer'}}
				/>
		</Draggable>
}

let Link = props => {
	let {a,b} = props
	return	<line x1={a.x + 20} y1={a.y + 20} x2={b.x + 20} y2={b.y + 20} stroke='black' />
}


export {Node, Link}
