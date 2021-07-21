const mongoose = require('mongoose');

const User = new mongoose.Schema({
  firstName: {
    type: String,
    min: 1,
    max: 255
  },
  lastName: {
    type: String,
    min: 1,
    max: 255
  },
  userName: {
    type: String,
    min: 3,
    max: 55
  },
  email: {
    type: String,
    min: 10,
    max: 255
  },
  password: {
    type: String,
    min: 5,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('User', User)