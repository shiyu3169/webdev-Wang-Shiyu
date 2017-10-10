import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ProfileComponent implements OnInit {

  uid: String;
  user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  prevUsername: String;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  update(username: String, email: String, firstName: String, lastName: String) {
    const aUser: User = this.userService.findUserByUsername(this.username);
    console.log(this.prevUsername);
    console.log(aUser);
    if (aUser && username !== this.prevUsername) {
      alert('username is taken, please try another one');
    } else {
      const updatedUser = {
        username: username,
        password: this.user.password,
        firstName: firstName,
        lastName: lastName,
        email: email
      };
      this.userService.updateUser(this.uid, updatedUser);
      this.prevUsername = username;
    }
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.user = this.userService.findUserById(this.uid);
      this.username = this.user.username;
      this.email = this.user.email;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.prevUsername = this.username
    });
  }

}
