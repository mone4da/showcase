
module.exports = {
	nodes : [
		{
			id: 0,
			name: 'zero'
		},
		{
			id: 1,
			name: 'one'
		},
		{
			id: 2,
			name: 'two'
		},
		{
			id: 3,
			name: 'three'
		}
	],

	links: [
		{a: 0, b:1},
		{a: 0, b:3},
		{a: 1, b: 2},
		{a:2, b: 0}
	]
}
