export class Widget {
  _id?: String;
  name?: String;
  widgetType: String;
  pageId: String;
  size?: number;
  text?: String;
  width?: String;
  url?: String;
  formatted?: Boolean;
  rows?: number;
  placeholder?: String;

  constructor(_id, widgetType, pageId) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
