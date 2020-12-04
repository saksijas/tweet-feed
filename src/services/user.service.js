const errorHandler = require('../_helpers/error-handler')
const db = require('../db/db')
const { User } = db

async function getUser(req, res) {
    try {
        const user = await User.findOne({ username: req.params.username })
        const friends = await User.find({ username: user.following }, { username: 1, tweets: 1 })
        return res.status(200).json({ user, friends })
    } catch (error) {
        return errorHandler(error, req, res)
    }
}
async function getUsers(req, res) {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return errorHandler(error, req, res)
    }
}

module.exports = {
    getUser,
    getUsers,
}
