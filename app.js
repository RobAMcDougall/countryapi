const express = require('express')
const cors = require('cors')
const app = express()
const logger = require('./middleware/logger')

app.use(cors())
app.use(logger)

module.exports = app