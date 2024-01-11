const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type:String
});
module.exports = mongoose.model('user', userSchema);