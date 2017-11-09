import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WidgetService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
  createWidget(pageId, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findWidgetsByPageId(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(widgetId: String, widget: Widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId: String) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  reorderWidgets(pageId, start, end) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + start + '&end=' + end;
    return this.http.put(url, '')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
