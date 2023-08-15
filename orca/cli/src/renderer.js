import ReactDOM from 'react-dom/client'

let render = App => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render( App )
}

export default render

