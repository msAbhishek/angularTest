/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:33:07
 * @modify date 2018-12-18 12:33:07
 * @desc [description]
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'myTestApp';
  errorMesssage = 'invalid user credentials';
  errorFlag = false;
  loginFlag: any;
  name: string;
  password: string;

  // viewChld is used to access dom elements
  @ViewChild('login') login: ElementRef;
  constructor( private loginserviceservice: LoginServiceService, private router: Router) { }
  ngOnInit() {
  }

  /**
   * loginCheck() function to check login credentials
   * @param myName
   * @param myPassword
   */
  loginCheck(myName, myPassword): void {
    if (!(myName && myPassword)) {
      this.errorFlag = true;
      return;
    }
    // calling the login() function of service file
    this.loginserviceservice.login(myName, myPassword)
      .subscribe((status: any) => {
        if ( status.id ) {
          this.errorFlag = false;
          this.loginFlag = status;
          if (status.type === 'user') {
            this.router.navigate(['/userHome/' + status.id]);
            return;
          }
          this.router.navigate(['/adminHome/' + status.id]);
        }
        this.errorFlag = true;
      });
  }

  /**
   * enterKey() function to activate loginbutton click on enter key press
   * @param event
   */
  enterKey(event: any): void {
    if (event.keyCode === 13) {
      const domElement: HTMLElement = this.login.nativeElement as HTMLElement;
      domElement.click();
  }
  }
}
