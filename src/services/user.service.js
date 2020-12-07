const db = require('../db/db')
const { User } = db

async function getUser(username) {
    const user = await User.findOne({ username: username })
    if (user) {
        const friends = await User.find({ username: user.following }, { username: 1, tweets: 1 })
        let tweets = []
        const tweetsMapper = (tweet, username) => {
            tweets.push({ user: username, content: tweet })
        }
        user.tweets.map(tweet => tweetsMapper(tweet, user.username))

        // Going through list of friends mapping each tweet with username
        friends.forEach((friend) => friend.tweets.map(tweet => tweetsMapper(tweet, friend.username)))
        return { user, tweets }
    }
    // Will return null and error will be thrown
    return user
}
async function getUsers() {
    return await User.find()
}

async function importUsers(users) {
    return await User.insertMany(users)
}

module.exports = {
    getUser,
    getUsers,
    importUsers,
}
