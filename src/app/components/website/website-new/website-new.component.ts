import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteNewComponent implements OnInit {

  uid: String;
  websites: Website[];
  name: String;
  description: String;

  constructor(private websiteService: WebsiteService, private router: ActivatedRoute) { }

  create(name: String, description: String) {
    const newWebsite: Website = {
      _id: this.websiteService.nextId(),
      name: this.name,
      developerId: this.uid,
      description: this.description
    };
    this.websiteService.createWebsite(this.uid, newWebsite);
  }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.websites = this.websiteService.findWebsitesByUser(this.uid);
    });
  }

}
