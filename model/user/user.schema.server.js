var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastNmae: String,
  email: String,
  phone: String,
  // websites: [Website],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

module.exports = UserSchema;
