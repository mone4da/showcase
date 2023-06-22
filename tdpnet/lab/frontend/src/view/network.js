import {useState} from 'react'

import {Node, Link} from './node'

let position = (w,h) => ({x : Math.floor(Math.random()*w), y: Math.floor(Math.random()*h)})

let organizePositions = (nodes, size) => nodes.map(item => ({...item, pos: position(size.width - 20, size.height - 20)}))

let organizeLinks = (positions, links) => {
	return links.map(link => ({
		a: positions.find(item => item.id === link.a)?.pos,
		b: positions.find(item => item.id === link.b)?.pos
	})
)}

const Network = props => {
	let {style, data, size} = props

	let [positions, setPositions] = useState(size.width && size.height ? organizePositions(data.nodes, size) : organizePositions(data.nodes, {width: 400, height: 400}))
	let [links, setLinks] = useState(organizeLinks(positions, data.links))

	let handleClick = () => {
		//setPositions( organizePositions(data.nodes, size) )
	}

	let handleDragging = (id, pos) => {
		let node = positions.find(item => item.id === id)
		let newpositions = [...positions.filter(item => item.id !== id), {...node, pos: pos}]
		setPositions(positions => newpositions)
		setLinks(organizeLinks(newpositions, data.links))
	}

	return <svg style={style} onClick={handleClick}>
			{links.filter(item => item.a && item.b).map(item => <Link a={item.a} b={item.b} />)}
			{positions.map(item =>
				size.width && size.height && <Node
					key={item.id}
					id={item.id}
					label={item.name}
					type={item.type}
					pos={item.pos}
					r = {20}
					onDragging = {handleDragging}
				/>)}
		</svg>
}

export default Network
