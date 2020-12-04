require('rootpath')()
require('dotenv').config()
const express = require('express')

const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./src/_helpers/error-handler')

server.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
server.use(bodyParser.json())
server.use(cors())

// api routes
server.use('/parse', require('./src/routes/parse.routes'))
server.use('/user', require('./src/routes/user.routes'))

// global error handler
// server.use(errorHandler);

module.exports = server
