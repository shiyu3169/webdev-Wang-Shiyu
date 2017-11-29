import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../services/shared.service.client";

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
  user: User;

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  register() {

    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;

    this.usernameError = false;
    this.passwordError = false;

    if (this.password !== this.verifyPassword) {
      this.passwordError = true;
    } else {
      this.userService.register(this.username, this.password)
        .subscribe(
          (user: any) => {
            this.router.navigate(['/user']);
          },
          (error: any) => {
            this.usernameError = true;
          }
        );
    }
  }

  ngOnInit() {
  }

}
