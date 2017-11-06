module.exports = function (app) {

  var userModel = require('../../model/user/user.model.server');

  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserByID);
  app.post("/api/user", createUser);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  var users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@gmail.com' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jan@hotmail.com' }
  ];

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
    res.json(users);
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
    var user = selectUserByID(uid);
    var index = users.indexOf(user);
    users.splice(index, 1);
    res.json(users);
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
