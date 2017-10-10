import { Injectable } from '@angular/core';
import {Website} from '../models/website.model.client';


@Injectable()
export class WebsiteService {
  websites: Website[] = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
  createWebsite(userId, website) {
    const nextId = (Number(this.websites[this.websites.length - 1]._id) + 1).toString();
    const newWeb = {
      _id: nextId,
      name: website.name,
      developerId: userId,
      description: website.description
    };
    website.push(newWeb);
  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId) {
    const results = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        results.push(this.websites[x]);
      }
    }
    return results;
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId) {
    return this.websites.find(function(website) {
      return website._id === websiteId;
    });
  }

  // updates the website in local websites array whose _id matches the websiteId parameter
  updateWebsite(websiteId, website) {
    const oldWeb = this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(oldWeb);
    this.websites[index].name = website.name;
    this.websites[index].description = website.description;
  }

  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId) {
    const oldWeb = this.findWebsiteById(websiteId);
    const index = this.websites.indexOf(oldWeb);
    this.websites.splice(index);
  }
}
