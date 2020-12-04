const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema({
  username: {
    type: String,
  },
  following: {
    type: [],
  },
  tweets: {
    type: [],
  },
});

schema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('User', schema);
