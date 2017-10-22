module.exports = function (app) {
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserByID);

  var users = [{_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@gmail.com' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jan@hotmail.com' }
  ];

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
        res.json({});
      }
      return;
    } else if(username) {
      var user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.json({});
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
