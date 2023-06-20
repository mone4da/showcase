
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
		},
		{
			id: 4,
			name: 'four'
		},
		{
			id: 5,
			name: 'five'
		},
		{
			id: 6,
			name: 'six'
		}
	],

	links: [
		{a: 0, b:1},
		{a: 0, b:3},
		{a: 1, b: 2},
		{a:2, b: 0},
		{a:3, b: 5},
		{a:4, b: 1},
		{a:5, b: 6},
		{a:2, b: 4}
	]
}
