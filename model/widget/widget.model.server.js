var mongoose = require("mongoose");

var WidgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

var PageSchema = require('../page/page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget) {
  return WidgetModel.create(widget)
    .then(function (widget) {
      var newWidget = widget;
      PageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget._id);
          return page.save();
        });
    });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({pageId: pageId});
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}
function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId})
    .then(function () {
      PageModel.update(
        {},
        {$pull: {widgets: widgetId}}
      );
    });
}
function reorderWidget(pageId, start, end) {
  return;
}


