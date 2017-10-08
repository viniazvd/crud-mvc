const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
  name: String,
  breed: String,
  age: Number
})

const user = mongoose.model('user', userSchema)

module.exports = user

