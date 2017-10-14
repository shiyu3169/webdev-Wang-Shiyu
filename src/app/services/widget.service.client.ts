import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {
  widgets: Widget[] =
    [
      { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
      { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
      { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%', 'url': 'http://lorempixel.com/400/200/'},
      { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
      { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
      { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%', 'url': 'https://youtu.be/AM2Ivdi9c4E' },
      { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
    ];

  // generates next id for new widget
  nextId() {
    return (Number(this.widgets[this.widgets.length - 1]._id) + 1).toString();
  }

  // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
  createWidget(pageId, widget) {
    const newWidget = {
      _id: this.nextId(),
      widgetType: widget.widgetType,
      pageId: pageId,
      size: widget.size,
      text: widget.text,
      width: widget.width,
      url: widget.url
    };
    this.widgets.push(widget);
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findWidgetsByPageId(pageId) {
    const results = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        results.push(this.widgets[x]);
      }
    }
    return results;
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId) {
    return this.widgets.find(function(widget) {
      return widget._id === widgetId;
    });
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(widgetId, widget) {
    const oldWidget = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(oldWidget);
    this.widgets[index].size = widget.size;
    this.widgets[index].name = widget.name;
    this.widgets[index].text = widget.text;
    this.widgets[index].width = widget.width;
    this.widgets[index].url = widget.url;
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId) {
    const oldPage = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(oldPage);
    this.widgets.splice(index,1);
  }

}
