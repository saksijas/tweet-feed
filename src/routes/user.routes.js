require('rootpath')()
const express = require('express')
const router = express.Router()
const userMiddleware = require('../middleware/user.middleware')

function getUser(req, res) {
    userMiddleware.getUser(req, res)
}

function getUsers(req, res) {
    userMiddleware.getUsers(req, res)
}

router.get('/:username', getUser)
router.get('/', getUsers)

module.exports = router
