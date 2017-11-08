var mongoose = require("mongoose");

var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

var UserSchema = require('../user/user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {
  return WebsiteModel.create(website)
    .then(function (website) {
      var web = website;
      return UserModel.findUserById(userId)
        .then(function (user) {
          user.websites.push(web._id);
          return user.save();
        });
    });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({developerId: userId});
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  var developerId = null;
  return WebsiteModel.findWebsiteById(websiteId)
    .then(function(website) {
      developerId = website.developerId;
      return  WebsiteModel.remove({_id: website._id})
        .then(function() {
          return UserModel.update(
            {_id: developerId},
            {$pull: {websites: websiteId}});
        });
    });
}
