
const Monitor = props => {
	let {Component, state, style} = props

	return <div style={style}>
			<Component.Bars
				data={state.system.data}
				width='400'
				height='400'
				max= '20'
				fill='orange'
			/>
		</div>
}

export default Monitor
