import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

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
