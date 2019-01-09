/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:16:10
 * @modify date 2018-12-18 12:16:10
 * @desc [description]
*/

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminHomeService } from '../admin-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewAdminsComponent implements OnInit {

  usersDetails: any;
  id: any;
  constructor(private route: ActivatedRoute, private adminhomeservice: AdminHomeService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.displayAdmins();
  }

  /**
  * displayAdmins() function to lidt all admins
  */
  displayAdmins(): void {
    this.adminhomeservice.displayAdmins(this.id)
    .subscribe((userObject: any) => {
      this.usersDetails = userObject;
    });
  }

  /**
   * searchAdmin() function to search admins from dtabase
   * @param name
   */
  searchAdmin(name: string): void {
    this.adminhomeservice.searchAdmin(name, this.id)
    .subscribe((userObject: any) => {
      this.usersDetails = userObject;
    });
  }

  /**
   * selectedUSer() function to detail a particular user
   * @param userObject
   */
  selectedUser(userObject: any): void {
    this.router.navigate(['/editUser/' + userObject.id]);
  }
}
