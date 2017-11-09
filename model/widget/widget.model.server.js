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
  var newWidget = null;
  return WidgetModel.create(widget)
    .then(function (widget) {
      newWidget = widget;
      return PageModel.findPageById(pageId)
    })
    .then(function (page) {
      page.widgets.push(newWidget._id);
      return page.save();
    })
    .then(function(page){
      return newWidget;
    })
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
  var pageId = null;
  return WidgetModel.findWidgetById(widgetId)
    .then(function(widget) {
      pageId = widget.pageId;
      return  WidgetModel.remove({_id: widget._id})
        .then(function() {
          return PageModel.update(
            {_id: pageId},
            {$pull: {widgets: widgetId}});
        });
    });
}

function reorderWidget(pageId, start, end) {
  return WidgetModel.find({_page:pageId})
    .then(function(widgets) {
      widgets.forEach(function(widget) {
        if (start < end) {
          if(widget.position === start) {
            widget.position = end;
            widget.save();
          } else if (widget.position > start
            && widget.position <= end) {
            widget.position--;
            widget.save();
          } else {
            if (widget.position === start) {
              widget.position = end;
              widget.save();
            } else if (widget.position < start
              && widget.position >= end) {
              widget.position++;
              widget.save();
            }
          }
        }
      })
    });
}


