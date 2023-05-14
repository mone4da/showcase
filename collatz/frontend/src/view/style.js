
const style = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%',
	background: '#08093B',
	color: '#BF9000',

	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		background: '#08093B',
		fontSize: '.9em',
		height: '30px',
		padding: '2px',

		border: 'solid #BF9000',
		borderWidth: '0 0 1px 0',

		logo: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			image : {
				height: '100%'
			}
		}
	},

	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		fontSize: '.6em'
	}
}

export default style
