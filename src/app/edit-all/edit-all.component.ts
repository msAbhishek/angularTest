/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:33:39
 * @modify date 2018-12-18 12:33:39
 * @desc [description]
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHomeService } from '../user-home.service';
import { AdminHomeService } from '../admin-home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-all',
  templateUrl: './edit-all.component.html',
  styleUrls: ['./edit-all.component.css']
})
export class EditAllComponent implements OnInit {

  usersDetails: any;
  id: any;
  imageURL: string;
  userFlag = false;
  constructor(private route: ActivatedRoute, private userhomeservice: UserHomeService, private adminhomeservice: AdminHomeService, private location: Location) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageURL = `http://localhost:3001/testimg/user_Image/` + this.id + `.jpg`;
    this.usersDetails = {
      name: ' ',
      uname: ' ',
      email: '',
      address: ' ',
      password: ' ',
      phone: 1,
      type: ' '
    };
  }

  ngOnInit() {
    this.getUser();
  }

  /**
   * getUser() function for loading userdetails on home page
   */
  getUser(): void {
    this.userhomeservice.getUser(this.id)
      .subscribe((userObject: any) => {
        this.usersDetails = userObject;
        if (this.usersDetails.type === 'user') {
          this.userFlag = true;
          console.log(this.userFlag);
        }
        console.log(this.usersDetails);
      });
  }

  /**
   * deleteUser() function for deleting a selected person
   */
  deleteUser(): void {
    this.adminhomeservice.deleteUser(this.usersDetails.uname)
      .subscribe((userObject: any) => {
        if (userObject) {
          this.location.back();
        }
      });
  }

  /**
   * makeAdmin() function for giving admin previllage
   */
  makeAdmin(): void {
    this.adminhomeservice.makeAdmin(this.usersDetails.uname)
    .subscribe((userObject: any) => {
      if (userObject) {
        this.location.back();
      }
    });
  }
}
