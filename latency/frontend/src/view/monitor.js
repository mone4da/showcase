const ids = [...Array(31)]

const max = list => list.reduce((max,a) => a > max ? a : max)

const Chart = props => {
	let {Bars, data, id, regions} = props

	const style = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '60px',
		border: '1px solid orange'
	}

	let mx = max(data)
	return id && <div style={style}>
			<div>{mx}</div>
			<Bars
				data={data}
				width='200'
				height='40'
				max= {mx + 1}
				fill='orange'
			/>
			<div>{regions}</div>
		</div>
		|| null
}

const Monitor = props => {
	let {Component,event, data, regions, style} = props

	return <div style={style}>
			{ ids.map( (_,id) => <Chart
						Bars = {Component.Bars}
						key={id}
						id={id}
						regions={regions[id]}
						data={data[id]}
					/> )
			}
		</div>
}

export default Monitor
