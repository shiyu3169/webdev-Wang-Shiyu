import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

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
  aUser: User;

  constructor(private sharedService: SharedService, private userService: UserService,
              private router: ActivatedRoute, private route: Router) {
  }

  update() {
    this.username = this.profileForm.value.username;
    this.email = this.profileForm.value.email;
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;

    this.usernameTaken = false;
    this.submitSuccess = false;
    this.userService.findUserByUsername(this.username)
      .subscribe(
        (user: User) => {
          this.aUser = user;
          if (this.aUser !== null && this.username !== this.prevUsername) {
            this.usernameTaken = true;
          } else {
            const updatedUser: User = {
              username: this.username,
              password: this.user.password,
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser)
              .subscribe(
                (newU: User) => {
                  this.route.navigate(['/user']);
                }
              );
            this.submitSuccess = true;
            this.prevUsername = this.username;
          }
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (status) => {
          this.route.navigate(['/login']);
        }
      );
 }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.uid = this.user._id;
    this.username = this.user.username;
    this.email = this.user.email;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.prevUsername = this.username;
  }

}
