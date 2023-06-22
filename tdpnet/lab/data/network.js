
module.exports = {
	nodes : [
		{
			id: 0,
			name: 'zero',
			type: 'e'
		},
		{
			id: 1,
			name: 'one',
			type: 'b'
		},
		{
			id: 2,
			name: 'two',
			type: 'b'
		},
		{
			id: 3,
			name: 'three',
			type: 'b'
		},
		{
			id: 4,
			name: 'four',
			type: 'b'
		},
		{
			id: 5,
			name: 'five',
			type: 'e'
		},
		{
			id: 6,
			name: 'six',
			type: 'b'
		}
	],

	links: [
		{a: 0, b:1},
		{a: 0, b:3},
		{a:3, b: 5},
		{a: 1, b: 2},
		{a:2, b: 0},
		{a:3, b: 5},
		{a:4, b: 1},
		{a:5, b: 6},
		{a:2, b: 4},
		{a:5, b: 1}
	]
}
