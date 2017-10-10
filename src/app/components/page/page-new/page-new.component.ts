import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PageService} from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  uid: String;
  wid: String;
  name: String;
  title: String;

  create(name: String, title: String) {
    const newPage: Page = {
      _id: this.pageService.nextId(),
      name: name,
      websiteId: this.wid,
      description: title
    };
    this.pageService.createPage(this.wid, newPage);
    this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
  }


  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
  }
}
