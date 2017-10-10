import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  register(username: String, password: String, verify_password: String) {
    // const user: User = this.userService.findUserByUsername(username);
    // const new_user: User = new User(username, password, '', '');
    // if (!user) {
    //   this.userService.createUser(user);
    // }
  }

  ngOnInit() {
  }

}
