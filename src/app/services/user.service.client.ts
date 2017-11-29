import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {}

  register(username, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  login(username: String, password: String) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map(
        (response: Response) => {
          return response;
        }
      );
  }

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: String, password: String) {
    const url =  this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
      });
  }

  // returns the user in local users array whose _id matches the userId parameter
  findUserById(uid: String) {
    const url =  this.baseUrl + '/api/user/' + uid;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  //  adds the user parameter instance to the local users array
  createUser(user: User) {
    const url =  this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  //  returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: String) {
    const url =  this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId: String, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
