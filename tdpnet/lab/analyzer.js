
let shortest = paths => {
	return paths.reduce((a,b) => a.length < b.length ? a : b )
}

module.exports = {shortest}
