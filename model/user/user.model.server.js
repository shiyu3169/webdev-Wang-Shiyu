var mongoose = require("mongoose");
var UserSchema = require('./user.schema.server')
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;

function createUser(user) {
  UserModel.create(user, function(err, doc) {
    console.log(err);
    console.log(doc);
  });
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
  UserModel.find(username, function(err, doc) {
    console.log(err);
    console.log(doc);
  });
}

function deleteUser(userId) {
  UserModel.find(username, function(err, doc) {
    console.log(err);
    console.log(doc);
  });
}
