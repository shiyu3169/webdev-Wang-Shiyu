module.exports = function (app) {
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserByID);
  app.post("/api/user", createUser);

  var users = [{_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com' },
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
    newUser._id = nextId();
    users.push(newUser);
    res.json(newUser);
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password) {
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("error");
      }
      return;
    } else if(username) {
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("error");
      }
      return;
    }
    res.json(users);
  }

  function findUserByID(req, res) {
    var uid = req.params["uid"];
    var user = users.find(function (user) {
      return user._id === uid;
    });
    res.json(user);
  }
};
