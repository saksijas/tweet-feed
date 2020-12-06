const mongoose = require('mongoose')
const users = require('../models/user.model')
mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
})
mongoose.Promise = global.Promise

module.exports = {
    User: users,
}
