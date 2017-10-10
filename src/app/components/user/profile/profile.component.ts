import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: String;
  user: User;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  update(username: String, email: String, firstName: String, lastName: String) {
    const aUser: User = this.userService.findUserByUsername(username);
    if (aUser && aUser.username !== this.user.username) {
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
    }
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.user = this.userService.findUserById(this.uid);
    });
  }

}
