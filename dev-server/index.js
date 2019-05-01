const express = require('express')
const app = express()
const port = 3000
const { registerRoutes } = require('./routes')

registerRoutes(app)

app.get('/', (req, res) => res.send('Hey World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))