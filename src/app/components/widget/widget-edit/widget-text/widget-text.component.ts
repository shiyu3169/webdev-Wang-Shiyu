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
    placeholder: ''
  };
  name: String;
  text: String;
  size: number;

  constructor() { }

  ngOnInit() {
  }

}
