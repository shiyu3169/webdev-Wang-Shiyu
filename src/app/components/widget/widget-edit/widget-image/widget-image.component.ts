import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: Widget;
  name: String;
  width: String;
  url: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.name = this.widgetForm.value.name;
    this.width = this.widgetForm.value.width;
    this.url = this.widgetForm.value.url;

    const updatedWidget: Widget = {
      _id: this.widget._id,
      name: this.name,
      widgetType: this.widget.widgetType,
      pageId: this.widget.pageId,
      width: this.width,
      url: this.url
    };
    this.widgetService.updateWidget(this.wgid, updatedWidget);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  remove() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid);
    });
  }
}
