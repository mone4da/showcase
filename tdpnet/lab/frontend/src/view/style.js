
const style = {
	display: 'flex',
	height: '100%',
	width: '100%',
	background: '#08093B',
	color: '#BF9000',

	network : {
		height: '100%',
		width: '100%',

		background:'gray'
	},

	toolbox : {
		position: 'absolute',
		display: 'grid',
		height: '30px',
		gridTemplateColumns: '30px 30px 30px 30px 30px 30px',
		border: '1px solid gray',
		borderRadius: '2px'
	},

	tool : {
		cli: {
			position: 'absolute',
			display: 'grid',
			height: '200px',
			gridTemplateColumns: '30px 300px',
			border: '0px solid gray',
			borderRadius: '4px'
		}
	}
}

export default style
