import Component from './component'
import asset from './asset'
import style from './style'

import {
	Header,
	Footer
} from './frame'

import {Content} from './content'

let View = props => {
	let {state, event, onUpdate} = props

	let handleUpdate = (data, source) => {
		onUpdate && onUpdate(data, source)
	}

	return <div style={style}>
			<Header
				logo={asset.Logo}
				state={state}
				style={style.header} />

			<Content
				Component={Component}
				state={state}
				asset={asset}
				style={style.content}
				onUpdate={handleUpdate} 
				event={event}/>
		</div>
}

export default View
