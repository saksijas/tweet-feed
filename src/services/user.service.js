const db = require('../db/db')
const { User } = db

async function getUser(username) {
    const user = await User.findOne({ username: username })
    if (user) {
        const friends = await User.find({ username: user.following }, { username: 1, tweets: 1 })
        let tweets = []
        const tweetsMapper = (tweet) => {
            tweets.push({ user: user.username, content: tweet })
        }
        user.tweets.map(tweetsMapper)

        // Going through list of friends mapping each tweet with username
        friends.forEach((friend) => friend.tweets.map(tweetsMapper))
        return { user, tweets }
    }
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
