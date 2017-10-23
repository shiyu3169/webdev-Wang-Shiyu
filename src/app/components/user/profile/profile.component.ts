import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;

  uid: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  prevUsername: String;
  usernameTaken: boolean;
  submitSuccess: boolean;
  user: User = {
    _id: this.uid,
    username: this.username,
    password: '',
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName
  };
  constructor(private userService: UserService, private router: ActivatedRoute) {
  }

  update() {
    this.username = this.profileForm.value.username;
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;

    this.usernameTaken = false;
    this.submitSuccess = false;

    const aUser: User = this.userService.findUserByUsername(this.username);
    if (aUser && this.username !== this.prevUsername) {
      this.usernameTaken = true;
    } else {
      const updatedUser: User = {
        _id: this.user._id,
        username: this.username,
        password: this.user.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      };
      this.userService.updateUser(this.uid, updatedUser)
        .subscribe(
          (newU: User) => {
            this.user = newU;
          }
        );
      this.submitSuccess = true;
      this.prevUsername = this.username;
    }
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.userService.findUserById(this.uid)
        .subscribe(
          (user: User) => {
            this.user = user;
          }
        );
      this.username = this.user.username;
      this.email = this.user.email;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.prevUsername = this.username;
    });
  }

}
