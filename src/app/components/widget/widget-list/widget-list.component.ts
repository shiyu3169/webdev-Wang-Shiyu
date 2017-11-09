import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  widgets: Widget[];
  constructor(private widgetService: WidgetService, private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  getYoutubeEmbedUrl(link: String) {
    let embedUrl = 'https://www.youtube.com/embed/';
    const parsedLink = link.split('/');
    embedUrl += parsedLink[parsedLink.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(this.pid, indexes.startIndex, indexes.endIndex)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pid)
        .subscribe(
          (widgets: Widget[]) => {
            this.widgets = widgets;
          }
        );
    });
  }
}
