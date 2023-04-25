import {useState} from 'react'
import Cli from './cli'
import Window from './window'

const availableTypes = ['window','cli']

const defaultPosition = {x: 200, y: 200}

let renderApp = (name, Component, event, asset, offset, onFocused, onDragged, onClose, onCommand) => {
	switch(name){
		case 'cli' : return <Cli Component={Component} event={event} asset = {asset.cli}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose} onCommand={onCommand}/>
		case 'window' : return <Window Component={Component} event={event} asset = {asset.cli}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose} />
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
		onClose,
		onCommand} = props

	let [positions, setPositions] = useState( Object.fromEntries( availableTypes.map(type => [type, defaultPosition]) ) )

	let [instances, setInstances] = useState( types )


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

	let handleCommand = data => {
		onCommand && onCommand(data)
	}

	return <>{instances.map(id => renderApp(
					id,
					Component,
					event,
					asset,
					positions[id],
					() => handleFocused(id),
					offset => handleDragged(id, offset),
					() => handleClose(id),
					data => handleCommand(data)
				)
			)}</>

}

export default  AppManager
