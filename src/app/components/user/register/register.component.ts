import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  verifyPassword: String;

  constructor(private userService: UserService, private router: Router) { }

  register(username: String, password: String, verifyPassword: String) {
    if (password !== verifyPassword) {
      alert('password does not match');
    } else {
      const user: User = this.userService.findUserByUsername(username);
      if (!user) {
        const newUser: User = {
          _id: this.userService.nextId(),
          username: this.username,
          password: this.password,
          firstName: '',
          lastName: '',
          email: ''
        }
        this.userService.createUser(newUser);
        this.router.navigate(['user', newUser._id]);
      }
    }
  }

  ngOnInit() {
  }

}
