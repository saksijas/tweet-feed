const errorHandler = require('../_helpers/error-handler');
const fs = require('fs');
var readline = require('readline');

const db = require('../db/db');
const { User } = db;
const path = require('path');

const resourcePath = path.join(__dirname, '..', 'resources/');
let tweets = [];
let users = [];

function splitter(line, splitWord) {
    return line.split(splitWord);
}
async function loadUsers(userFile) {
    fs.readFile(resourcePath + userFile, 'utf8', async (err, data) => {
        if (err) throw err;
        lines = data.split('\r\n');
        lines.forEach(line => {
            let newUser = {};
            if(line.length > 0){
                const splitterResult = splitter(line, ' follows ');
                newUser.username = splitterResult[0];
                newUser.following = splitterResult[1].split(', ');                
                newUser.tweets = tweets.filter(tweet => newUser.username === tweet.user).map(tweet => tweet.content);
                let user = users.filter(user => user.username === newUser.username)[0];
                // check if user already exists
                if(user) {
                    user.following = user.following.filter(followingUser => !newUser.following.includes(followingUser));
                    user.following.push(...newUser.following);
                    userIndex = users.findIndex((userObject => userObject.username === user.username));
                    users[userIndex].following = user.following;
                } else {
                    users.push(newUser);
                }
            }
        });
        await User.insertMany(users);
    });
}
function loadTweets(tweetFile) {
    fs.readFile(resourcePath + tweetFile, 'utf8', (err, data) => {
        if (err) throw err;
        lines = data.split('\r\n');
        lines.forEach(line => {
            let tweet = {};
            if(line.length > 0){
                const splitterResult = splitter(line, '> ');
                tweet.user = splitterResult[0];
                tweet.content = splitterResult[1];
                tweets.push(tweet);
            }
        })
    });
}
async function parse(req, res){
    userFile = 'user.txt';
    tweetFile = 'tweet.txt';
    loadTweets(tweetFile);
    loadUsers(userFile);
}

module.exports = {
    parse
  };