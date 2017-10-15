import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Widget } from '../../../models/widget.model.client';
import { WidgetService} from '../../../services/widget.service.client';
@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  wgid: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router ) { }

  createHead() {
    this.wgid = this.widgetService.nextId();
    const newWidget: Widget = {
      _id: this.wgid,
      widgetType: 'HEADING',
      pageId: this.pid,
    };
    this.widgetService.createWidget(this.pid, newWidget);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
  }

  createImage() {
    this.wgid = this.widgetService.nextId();
    const newWidget: Widget = {
      _id: this.wgid,
      widgetType: 'IMAGE',
      pageId: this.pid,
    };
    this.widgetService.createWidget(this.pid, newWidget);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
  }

  createYoutube() {
    this.wgid = this.widgetService.nextId();
    const newWidget: Widget = {
      _id: this.wgid,
      widgetType: 'YOUTUBE',
      pageId: this.pid,
    };
    this.widgetService.createWidget(this.pid, newWidget);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }

}
