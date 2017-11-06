module.exports = function (app) {

  var userModel = require('../../model/user/user.model.server');

  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserByID);
  app.post("/api/user", createUser);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  // generates next id for new user
  function nextId() {
    return (Number(users[users.length - 1]._id) + 1).toString();
  }

  function createUser(req, res) {
    var newUser = req.body;
    // newUser._id = nextId();
    userModel.createUser(newUser)
      .then(function(user) {
        res.json(user);
      })
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function(user){
          res.json(user);
        });
      return;
    } else if(username) {
      userModel.findUserByUsername(username)
        .then(function(user){
          res.json(user);
        });
      return;
    }
    res.json(null);
  }

  function findUserByID(req, res) {
    var uid = req.params["uid"];
    userModel.findUserById(uid)
      .then(function(user) {
        res.json(user);
      });
  }

  function deleteUser(req, res) {
    var uid = req.params["uid"];
    userModel.deleteUser(uid)
      .then(function(user) {
        res.json(user);
      });
    // var user = selectUserByID(uid);
    // var index = users.indexOf(user);
    // users.splice(index, 1);
    // res.json(users);
  }

  function updateUser(req, res) {
    var uid = req.params["uid"];
    var newUser = req.body;
    userModel.updateUser(uid, newUser)
      .then(function(user) {
        res.json(user);
      })
  }
};
