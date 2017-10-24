import { Injectable } from '@angular/core';
import {Website} from '../models/website.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
  createWebsite(userId: String, website: Website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // updates the website in local websites array whose _id matches the websiteId parameter
  updateWebsite(websiteId: String, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
