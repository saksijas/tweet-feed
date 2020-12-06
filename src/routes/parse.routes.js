require('rootpath')()
const express = require('express')
const router = express.Router()
const parseMiddleware = require('../middleware/parse.middleware')

function parse(req, res) {
    parseMiddleware.parse(req, res)
}

router.post('/', parse)

module.exports = router
