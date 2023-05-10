
import {useState} from 'react'

const Tab = props => {
	let {id, data, selected} = props

	const style = selected => {
		return selected && {
					background: '#0404cc',
					cursor: 'default'
				}
				|| {
					background: '#08093b',
					cursor: 'pointer'
				}
	}


	let handleClick = () => {
		props.onClick && props.onClick()
	}

	return	<div key={id} style={{...style(selected),  display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={handleClick}>
			{data}
		</div>
}

const IconTab = props => {
	let {id, data, selected} = props

	const style = selected => {
		return selected && {
					background: '#0404cc',
					cursor: 'default'
				}
				|| {
					background: '#08093b',
					cursor: 'pointer'
				}
	}


	let handleClick = () => {
		props.onClick && props.onClick()
	}

	return	<div key={id} style={{...style(selected), height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={handleClick}>
			{data}
		</div>
}


const Tabs = props => {
	let {style, selection, data, onSelection} = props

	let handleClick = id => {
		onSelection && onSelection(id)
	}

	return 	<div style={style}>
			{data.map(item =>
				item.icon && <IconTab
					id = {item.id}
					data = {item.icon}
					selected={item.id === selection}
					onClick = {() => handleClick(item.id)}
					/>
					||
					<Tab
					id = {item.id}
					data = {item.data}
					selected={item.id === selection}
					onClick = {() => handleClick(item.id)}
					/>
			)}
		</div>
}

let verticalStyle = tabSize => ({
	display: 'grid',
	gridTemplateColumns: `${tabSize} auto`,
	height: '100%',
	paddingRight: '2px',

	tabs: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	}
})

let horizontalStyle = tabSize => ({
	display: 'grid',
	gridTemplateRows : `${tabSize} auto`,
	height: '100%',
	width: '100%',
	paddingRight: '2px',

	tabs: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '100%'
	}
})

let horizontalSplitterStyle = {
	width: '4px',
	height: '100%'
}

let verticalSplitterStyle = {
	height: '4px',
	width: '100%'
}

const TabContainer = props => {
	let {style, labels, tab, horizontal, tabSize, onSelection} = props
	let [selection, setSelection] = useState(tab)

	let handleSelection = id => {
		setSelection(id)
		onSelection && onSelection(id)
	}

	let displayStyle = horizontal ? horizontalStyle(tabSize || '30px') : verticalStyle(tabSize || '300px')

	return <div style={{...displayStyle, ...style}} >
			<Tabs
				style={displayStyle.tabs}
				data={labels} selection={selection}
				onSelection={handleSelection} />

			{props.children.find(item => item.key === selection)}
		</div>
}

export  { TabContainer, Tab}

/*
			<div style={horizontal ? horizontalSplitterStyle : verticalSplitterStyle} />

			<div>
			{props.children.find(item => item.key === selection)}
			</div>

*/
