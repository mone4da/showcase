import {useState} from 'react'
import Cli from './cli'
import Histogram from './histogram'

const availableTypes = ['histogram','cli']

const defaultPosition = {x: 200, y: 200}

let renderApp = (name, Component, event, asset, offset, onFocused, onDragged, onClose) => {
	switch(name){
		case 'cli' : return <Cli Component={Component} event={event} asset = {asset.cli}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
		case 'histogram' : return <Histogram Component={Component} event={event} asset = {asset.cli}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose} />
	}

	return null
}

let AppManager = props => {
	let {
		types,
		Component,
		state,
		asset,
		style,
		onUpdate,
		event,
		onFocused,
		onClose} = props

	let [positions, setPositions] = useState( Object.fromEntries( availableTypes.map(type => [type, defaultPosition]) ) )


	let handleFocused = (id, offset) => {
		onFocused && onFocused(id, offset)
	}

	let handleDragged = (id, offset) => {
		setPositions( positions => {
			positions[id] = offset
			return positions
		})
	}

	let handleClose = id => {

		setPositions( positions => {
			positions[id] = defaultPosition
			return positions
		})

		onClose && onClose(id)
	}


	return <>{types.map(id => renderApp(
					id,
					Component,
					event,
					asset,
					positions[id],
					() => handleFocused(id),
					offset => handleDragged(id, offset),
					() => handleClose(id)
				)
			)}</>

}

export default  AppManager
