import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FlickrService {

  key = '6c8dafa5dd3c1e8a136f3fb7b42488f3';
  secret = '89d075b312e56b18';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
