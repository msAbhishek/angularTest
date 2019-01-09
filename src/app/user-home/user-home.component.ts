/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-14 16:45:19
 * @modify date 2018-12-14 16:45:19
 * @desc [description]
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHomeService } from '../user-home.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  imageURL: string;
  id: any;
  userData: any;
  userFlag = false;

  @ViewChild('imgupload') imgupload: ElementRef;

  constructor(private route: ActivatedRoute, private userhomeservice: UserHomeService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageURL = `http://localhost:3001//testimg/user_Image/` + this.id + `.jpg`;
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
        this.userData = userObject;
      });
  }

  /**
   * triggerFileUPload() function for triggering click event on the FILE INPUT button
   */
  triggerFileUPload(): void {
    const domElement: HTMLElement = this.imgupload.nativeElement as HTMLElement;
    domElement.click();
  }

  /**
   * uploadImage() function for uploading user choosen image onto server
   * @param event
   */
  uploadImage(event: any): void {
    const self = this;
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        console.log(e);
      };
      reader.onloadend = function () {
        const imgString = this.result;
        self.userhomeservice.uploadImage(imgString, self.id)
          .subscribe((resultObj: any) => {
            if (resultObj) {
              self.imageURL += '?random+\=' + Math.random();
            }
          });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
