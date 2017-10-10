import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
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
    if (aUser && username !== this.prevUsername) {
      alert('username is taken, please try another one');
    } else {
      const updatedUser: User = {
        _id: this.userService.nextId(),
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
      this.prevUsername = this.username;
    });
  }

}
