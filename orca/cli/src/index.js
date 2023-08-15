import render from './renderer'

import Model from './model'
import App from './app'
import View from './view'

new Model(
	model => render(
		<App model={model} View = {View}/>
	)
)
