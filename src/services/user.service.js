const errorHandler = require('../_helpers/error-handler');
const db = require('../db/db');
const { User } = db;

async function getUser(req, res) {
    const user = await User.findOne({username: req.params.username});
    const friends =  await User.find({username: user.following}, { username:1, tweets: 1 } );
    return res.status(200).json({user, friends});
}
async function getUsers(req, res) {
    const users = await User.find();
    return res.status(200).json(users);
}

module.exports = {
    getUser,
    getUsers
}
