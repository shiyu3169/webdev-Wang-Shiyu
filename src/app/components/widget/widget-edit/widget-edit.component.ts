import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: Widget= {
    _id: '',
    widgetType: '',
    pageId: '',
    size: 0,
    text: ''
  };


  constructor(private widgetService: WidgetService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
    });
  }

}
