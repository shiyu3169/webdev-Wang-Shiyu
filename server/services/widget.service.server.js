
module.exports = function (app) {
  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);

  var widgets =
    [
      { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
      { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
      { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%', 'url': 'http://lorempixel.com/400/200/'},
      { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
      { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
      { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%', 'url': 'https://youtu.be/AM2Ivdi9c4E' },
      { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
    ];

  // generates next id for new user
  function nextId() {
    return (Number(widgets[widgets.length - 1]._id) + 1).toString();
  }

  function createWidget(req, res) {
    var newWidget = req.body;
    newWidget._id = nextId();
    widgets.push(newWidget);
    res.json(newWidget);
  }
  function findAllWidgetsForPage(req, res) {
    var pid = req.params["pid"];
    const results = [];
    for (var x = 0; x < widgets.length; x++) {
      if (widgets[x].pageId === pid) {
        results.push(widgets[x]);
      }
    }
    res.json(results);
  }

  function selectWidgetById(wgid) {
    return widgets.find(function(widget) {
      return widget._id === wgid;
    })
  }
  function findWidgetById(req, res) {
    var wgid = req.params["wgid"];
    var widget = selectWidgetById(wgid);
    res.json(widget);
  }
  function updateWidget(req, res) {
    var wgid = req.params["wgid"];
    var newWidget = req.body;
    var oldWidget = selectWidgetById(wgid);
    var index = widgets.indexOf(oldWidget);
    widgets[index].size = newWidget.size;
    widgets[index].text = newWidget.text;
    widgets[index].width = newWidget.width;
    widgets[index].url = newWidget.url;
    res.json(newWidget);
  }
  function deleteWidget(req, res) {
    var wgid = req.params["wgid"];
    var widget = selectWidgetById(wgid);
    var index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.json(widgets);
  }
};
