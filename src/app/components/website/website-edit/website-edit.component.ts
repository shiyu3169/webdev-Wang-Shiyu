import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  uid: String;
  wid: String;
  websites: Website[];
  name: String;
  description: String;
  website: Website;

  constructor(private websiteService: WebsiteService,
              private activeRouter: ActivatedRoute, private router: Router) { }

  update(name: String, description: String) {
    const updatedWeb: Website = {
      _id: this.websiteService.nextId(),
      name: name,
      developerId: this.uid,
      description: description
    };
    this.websiteService.updateWebsite(this.wid, updatedWeb);
    this.router.navigate(['user', this.uid, 'website']);
  }

  delete() {
    this.websiteService.deleteWebsite(this.wid);
    this.router.navigate(['user', this.uid, 'website']);
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.websites = this.websiteService.findWebsitesByUser(this.uid);
      this.website = this.websiteService.findWebsiteById(this.wid);
      this.name = this.website.name;
      this.description = this.website.description;
    });
  }

}
