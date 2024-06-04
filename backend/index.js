const express = require('express')
require('dotenv').config()
const port = process.env.PORT_RUN
var cors = require('cors')
const app = express()
const route = require('./routes')


app.use(cors())
app.use(route)
 

app.listen(port)