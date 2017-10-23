import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  users: User[] = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@gmail.com' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jan@hotmail.com' }
  ];

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
    // return this.users.find(function(user) {
    //   return user._id === uid;
    // });
    const url =  this.baseUrl + '/api/user/' + uid;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // generates next id for new user
  nextId() {
    return (Number(this.users[this.users.length - 1]._id) + 1).toString();
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
    // const newUser = {
    //   _id: this.nextId(),
    //   username: user.username,
    //   password: user.password,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   email: user.email
    // };
    // this.users.push(newUser);
  }

  //  returns the user in local users array whose username matches the parameter username
  findUserByUsername(username) {
    return this.users.find(function(user) {
      return user.username === username;
    });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) {
    // const oldUser = this.findUserById(userId);
    // const index = this.users.indexOf(oldUser);
    // this.users[index].username = user.username;
    // this.users[index].firstName = user.firstName;
    // this.users[index].lastName = user.lastName;
    // this.users[index].email = user.email;
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
    // const oldUser = this.findUserById(userId);
    // const index = this.users.indexOf(oldUser);
    // this.users.splice(index, 1);
  }

}
