import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  username: String;
  password: String;
  verifyPassword: String;
  usernameError: boolean;
  passwordError: boolean;

  constructor(private userService: UserService, private router: Router) { }

  register() {

    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;

    this.usernameError = false;
    this.passwordError = false;

    if (this.password !== this.verifyPassword) {
      this.passwordError = true;
    } else {
      const user: User = this.userService.findUserByUsername(this.username);
      if (!user) {
        const newUser: User = {
          _id: this.userService.nextId(),
          username: this.username,
          password: this.password,
          firstName: '',
          lastName: '',
          email: ''
        };
        this.userService.createUser(newUser);
        this.router.navigate(['user', newUser._id]);
      } else {
        this.usernameError = true;
      }
    }
  }

  ngOnInit() {
  }

}
