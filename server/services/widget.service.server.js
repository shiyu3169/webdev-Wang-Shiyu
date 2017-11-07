
module.exports = function (app) {

  var widgetModel = require('../../model/widget/widget.model.server');

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/public/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.put("/api/page/:pageId/widget?initial=index1&final=index2");

  function uploadImage(req, res) {

    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = selectWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    var callbackUrl   = req.headers.origin + "/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    res.redirect(callbackUrl);
  }

  function createWidget(req, res) {
    var pid = req.params["pid"];
    var newWidget = req.body;
    widgetModel.createWidget(pid, newWidget)
      .then(function(widget) {
        console.log(widget);
        res.json(widget);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pid = req.params["pid"];
    widgetModel.findAllWidgetsForPage(pid)
      .then(function(widgets) {
        res.json(widgets);
      });
  }

  function findWidgetById(req, res) {
    var wgid = req.params["wgid"];
    widgetModel.findWidgetById(wgid)
      .then(function (widget) {
        res.json(widget);
      });
  }
  function updateWidget(req, res) {
    var wgid = req.params["wgid"];
    var newWidget = req.body;
    widgetModel.updateWidget(wgid, newWidget)
      .then(function () {
        res.json(null);
      });
  }
  function deleteWidget(req, res) {
    var wgid = req.params["wgid"];
    widgetModel.deleteWidget(wgid)
      .then(function () {
        res.json(null);
      });
  }
};
