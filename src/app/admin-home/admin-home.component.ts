/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:33:54
 * @modify date 2018-12-18 12:33:54
 * @desc [description]
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminHomeService } from '../admin-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  usersDetails: any;
  stat = true;
  id: any;
  constructor( private route: ActivatedRoute, private adminhomeservice: AdminHomeService, private router: Router ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.displayDetails();
  }

  /**
   * displayDetails() function to display users
   */
  displayDetails(): void {
    this.adminhomeservice.displayDetails()
    .subscribe((userObject: any) => {
      this.usersDetails = userObject;
    });
  }

  /**
   * searchUser() function to search a user
   * @param name
   */
  searchUser(name: string): void {
    this.adminhomeservice.searchUser(name, this.id)
    .subscribe((userObject: any) => {
      this.usersDetails = userObject;
    });
  }

  /**
   * selectedUser() function to detail a selected user
   * @param userObject
   */
  selectedUser(userObject: any): void {
    this.router.navigate(['/editUser/' + userObject.id]);
  }
}
