import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widget: Widget= {
    _id: '',
    widgetType: '',
    pageId: '',
    name: '',
    text: '',
    rows: 0,
    placeholder: '',
    formatted: false
  };
  name: String;
  text: String;
  rows: number;
  placeholder: String;
  formatted: boolean;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.name = this.widgetForm.value.name;
    this.text = this.widgetForm.value.text;
    this.rows = this.widgetForm.value.rows;
    this.placeholder = this.widgetForm.value.placeholder;
    this.formatted = this.widgetForm.value.formatted;

    const updatedWidget: Widget = {
      name: this.name,
      widgetType: this.widget.widgetType,
      pageId: this.widget.pageId,
      rows: this.rows,
      text: this.text,
      placeholder: this.placeholder,
      formatted: this.formatted
    };
    this.widgetService.updateWidget(this.wgid, updatedWidget)
      .subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

  remove() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: Widget[]) => {
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
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
