
const regions = code => {
	let rc = ['de','gb','us','sg','au']
	let list = ''
	return code
		.toString(2)
		.padStart(5,'0')
		.split('')
		.reverse()
		.map((v,i) => v==='1' ? i + ':' + rc[i] : i + ':xx')
		.filter(v => v != '')
		.join()
}


[...Array(31)].map((_,i) => regions(i)).forEach((item,i) => {
		 console.log(i.toString(2).padStart(8,'0'),  item )
})
