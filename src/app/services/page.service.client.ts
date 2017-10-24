import { Injectable } from '@angular/core';
import {Page} from '../models/page.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
  createPage(websiteId: String, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // updates the page in local pages array whose _id matches the pageId parameter
  updatePage(pageId: String, page: Page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, page)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(pageId: String) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
