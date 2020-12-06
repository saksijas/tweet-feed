const errorHandler = require('../_helpers/error-handler')
const db = require('../db/db')
const { User } = db

async function getUser(username) {
    const user = await User.findOne({ username: username })
    const friends = await User.find({ username: user.following }, { username: 1, tweets: 1 })
    return { user, friends }
}
async function getUsers(req, res) {
    return await User.find()
}

module.exports = {
    getUser,
    getUsers,
}
