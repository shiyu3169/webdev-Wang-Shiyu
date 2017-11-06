import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;

  uid: String;
  websites: Website[];
  name: String;
  description: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  create() {
    this.name = this.webForm.value.name;
    this.description = this.webForm.value.description;

    const newWebsite: Website = {
      name: this.name,
      developerId: this.uid,
      description: this.description
    };
    this.websiteService.createWebsite(this.uid, newWebsite)
      .subscribe(
        (websites: Website[]) => {
          this.router.navigate(['user', this.uid, 'website']);
        }
      );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.websiteService.findWebsitesByUser(this.uid)
        .subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
        );
    });
  }

}
