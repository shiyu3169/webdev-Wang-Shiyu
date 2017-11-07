import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PageService} from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;

  uid: String;
  wid: String;
  pid: String;
  name: String;
  title: String;
  page: Page = {
    _id: '',
    name: '',
    websiteId: '',
    description: ''
  };

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  update() {
    this.name = this.pageForm.value.name;
    this.title = this.pageForm.value.title;

    const updatedPage: Page = {
      name: this.name,
      websiteId: this.wid,
      description: this.title
    };
    this.pageService.updatePage(this.pid, updatedPage)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
        }
      );
  }

  remove() {
    this.pageService.deletePage(this.pid)
      .subscribe(
        (pages: Page[]) => {
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
        }
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.pageService.findPageById(this.pid)
        .subscribe(
          (page: Page) => {
            this.page = page;
            this.name = this.page.name;
            this.title = this.page.description;
          }
        );
    });
  }
}
