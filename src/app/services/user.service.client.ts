import { Injectable } from '@angular/core';
import {User} from '../models/user.model.client';

@Injectable()
export class UserService {
  users: User[] = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder'  },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley'  },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
  ];

  // check username and password before login
  findUserByCredentials(username, password) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  // find user based on given id
  findUserById(uid) {
    return this.users.find(function(user) {
      return user._id === uid;
    });
  }

  // create new user
  createUser(user) {
    this.users.push(user);
  }
}
