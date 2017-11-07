module.exports = function (app) {

  var websiteModel = require('../../model/website/website.model.server');

  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);

  var websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  function createWebsite(req, res) {
    var userId = req.params["uid"];
    var newWeb = req.body;
    websiteModel.createWebsiteForUser(userId, newWeb)
      .then(function () {
        res.json(null);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var uid = req.params["uid"];
    websiteModel.findAllWebsitesForUser(uid)
      .then(function(websites) {
        res.json(websites);
      });
  }

  function selectWebsiteById(wid) {
    return websites.find(function(website) {
      return website._id === wid;
    });
  }

  function findWebsiteById(req, res) {
    var wid = req.params["wid"];
    websiteModel.findWebsiteById(wid)
      .then(function(website) {
        res.json(website);
      });
  }

  function updateWebsite(req, res) {
    var wid = req.params["wid"];
    var newWeb = req.body;
    websiteModel.updateWebsite(wid, newWeb)
      .then(function() {
        res.json(null);
      })
  }

  function deleteWebsite(req, res) {
    var wid = req.params["wid"];
    var website = selectWebsiteById(wid);
    var index = websites.indexOf(website);
    websites.splice(index, 1);
    res.json(websites);
  }
};
