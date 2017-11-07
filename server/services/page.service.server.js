module.exports = function (app) {

  var pageModel = require('../../model/page/page.model.server');

  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  function createPage(req, res) {
    var wid = req.params["wid"];
    var newPage = req.body;
    pageModel.createPage(wid, newPage)
      .then(function () {
        res.json(null);
      });
  }
  //  /api/website/:wid/page
  function findAllPagesForWebsite(req, res) {
    var wid = req.params["wid"];
    pageModel.findAllPagesForWebsite(wid)
      .then(function(pages) {
        res.json(pages);
      });
  }

  function findPageById(req, res) {
    var pid = req.params["pid"];
    pageModel.findPageById(pid)
      .then(function(page) {
        res.json(page);
      })
  }

  function updatePage(req, res) {
    var pid = req.params["pid"];
    var newPage = req.body;
    pageModel.updatePage(pid, newPage)
      .then(function() {
        res.json(null);
      });
  }

  function deletePage(req, res) {
    var pid = req.params["pid"];
    pageModel.deletePage(pid)
      .then(function() {
        res.json(null);
      });
  }
};
