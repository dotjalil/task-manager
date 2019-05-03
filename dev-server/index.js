const express = require('express')
const app = express()
const port = 3000
const { registerRoutes } = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDB } = require('./config/db')

connectToDB()
app.use(bodyParser.json())
app.use(cors())
registerRoutes(app)

app.get('/', (req, res) => res.send('Hey World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))