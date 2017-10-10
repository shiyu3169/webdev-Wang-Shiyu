import { Injectable } from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable()
export class PageService {
  pages: Page[ ] =
    [
      { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
    ];

  // generates next id for new page
  nextId() {
    return (Number(this.pages[this.pages.length - 1]._id) + 1).toString();
  }

  // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId, page) {
    const newPage = {
      _id: this.nextId(),
      name: page.name,
      websiteId: websiteId,
      description: page.description
    };
    this.pages.push(newPage);
  }

  // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId) {
    const results = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        results.push(this.pages[x]);
      }
    }
    return results;
  }

  // retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(pageId) {
    return this.pages.find(function(page) {
      return page._id === pageId;
    });
  }

  // updates the page in local pages array whose _id matches the pageId parameter
  updatePage(pageId, page) {
    const oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);
    this.pages[index].name = page.name;
    this.pages[index].description = page.description;
  }

  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(pageId) {
    const oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);
    this.pages.splice(index, 1);
  }

}
