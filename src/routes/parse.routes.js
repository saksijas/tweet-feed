require('rootpath')()
const express = require('express')
const router = express.Router()
const parseService = require('../services/parse.service')

function parse(req, res) {
    parseService.parse(req, res)
}

router.post('/', parse)

module.exports = router
