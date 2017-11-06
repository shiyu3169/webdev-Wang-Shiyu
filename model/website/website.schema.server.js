var mongoose = require("mongoose");

var WebsiteSchema = mongoose.Schema({
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'website'});

module.exports = WebsiteSchema;
