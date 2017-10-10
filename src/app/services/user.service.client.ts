import { Injectable } from '@angular/core';
import {User} from '../models/user.model.client';

@Injectable()
export class UserService {
  users: User[] = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
  ];

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(username, password) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  // returns the user in local users array whose _id matches the userId parameter
  findUserById(uid) {
    return this.users.find(function(user) {
      return user._id === uid;
    });
  }

  //  adds the user parameter instance to the local users array
  createUser(user) {
    const nextId = (Number(this.users[this.users.length - 1]._id) + 1).toString();
    const newUser = {
      _id: nextId,
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    this.users.push(newUser);
  }

  //  returns the user in local users array whose username matches the parameter username
  findUserByUsername(username) {
    return this.users.find(function(user) {
      return user.username === username;
    });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) {
    const oldUser = this.findUserById(userId);
    const index = this.users.indexOf(oldUser);
    this.users[index].username = user.username;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId) {
    const oldUser = this.findUserById(userId);
    const index = this.users.indexOf(oldUser);
    this.users.splice(index);
  }

}
