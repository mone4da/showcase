

const regions = code => {
	let rc = ['de','gb','us','sg','au']
	let list = ''
	return code
		.toString(2)
		.padStart(rc.length,'0')
		.split('')
		.reverse()
		.map((v,i) => v==='1' ? rc[i] : '')
		.filter(v => v != '')
		.join()
}

const state =  {
	system: {
		data: [...Array(31)].map(_ => [...Array(100)].map(_ => 0)),
		regions: [...Array(31)].map((_,i) => regions(i))
	},

	user: {
	}

}

export default state

