const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Id: Number,
  name: String,
  email: String,
  gender: String,
  status: String,
  Created_at: String,
  Updated_at: String,
});


module.exports = mongoose.model('User', userSchema);