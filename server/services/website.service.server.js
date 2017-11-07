module.exports = function (app) {

  var websiteModel = require('../../model/website/website.model.server');

  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);

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
    websiteModel.deleteWebsite(wid)
      .then(function() {
      res.json(null);
    });
  }
};
