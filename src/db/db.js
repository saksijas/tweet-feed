const mongoose = require('mongoose')
const users = require('../models/user.model')
mongoose.connect('mongodb://localhost:27017/tweetFeed', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
mongoose.Promise = global.Promise

module.exports = {
    User: users,
}
