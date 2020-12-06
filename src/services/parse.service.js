const fs = require('fs')
const path = require('path')
const resourcePath = path.join(__dirname, '..', 'resources/')

const db = require('../db/db')
const { User } = db

let tweets = []
let users = []
userFile = 'user.txt'
tweetFile = 'tweet.txt'

function splitter(line, splitWord) {
    return line.split(splitWord)
}
function getLoadedUsers() {
    return users
}
function getLoadedTweets() {
    return tweets
}
async function loadUsers() {
    fs.readFile(resourcePath + userFile, 'utf8', async (err, data) => {
        if (err) {
            throw err
        }
        lines = data.split('\r\n')
        lines.forEach((line) => {
            let newUser = {}
            if (line.length > 0) {
                const splitterResult = splitter(line, ' follows ')
                newUser.username = splitterResult[0]
                newUser.following = splitterResult[1].split(', ')
                newUser.tweets = tweets.filter((tweet) => newUser.username === tweet.username).map((tweet) => tweet.content)

                let user = users.filter((user) => user.username === newUser.username)[0]
                // check if user already exists
                if (user) {
                    // Filtering already followed users
                    user.following = user.following.filter((followingUser) => !newUser.following.includes(followingUser))
                    user.following.push(...newUser.following)
                    userIndex = users.findIndex((userObject) => userObject.username === user.username)
                    users[userIndex].following = user.following
                } else {
                    users.push(newUser)
                }
            }
        })
        await User.insertMany(users)
    })
}
async function loadTweets() {
    fs.readFile(resourcePath + tweetFile, 'utf8', (err, data) => {
        if (err) throw err
        lines = data.split('\r\n')
        lines.forEach((line) => {
            let tweet = {}
            if (line.length > 0) {
                const splitterResult = splitter(line, '> ')
                tweet.username = splitterResult[0]
                tweet.content = splitterResult[1]
                tweets.push(tweet)
            }
        })
        loadUsers()
    })
}

module.exports = {
    loadTweets,
    getLoadedTweets,
    getLoadedUsers,
}
