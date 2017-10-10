import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PageService} from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  name: String;
  title: String;
  page: Page;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  update(name: String, title: String) {
    const updatedPage: Page = {
      _id: this.pageService.nextId(),
      name: name,
      websiteId: this.wid,
      description: title
    };
    this.pageService.updatePage(this.pid, updatedPage);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
  }

  delete() {
    this.pageService.deletePage(this.pid);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.page = this.pageService.findPageById(this.pid);
      this.name = this.page.name;
      this.title = this.page.description;
    });
  }
}
