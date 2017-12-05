var mongoose = require("mongoose");
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;

module.exports = UserModel;


function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}


function createUser(user) {
  return UserModel.create(user);
}

function findUserById(uid) {
  return UserModel.findById(uid);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
