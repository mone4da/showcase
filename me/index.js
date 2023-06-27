
const xp = require('express')
const app = xp()
app.use(xp.static('./'))

const port = 8881
app.listen(port, () => console.log(port))
