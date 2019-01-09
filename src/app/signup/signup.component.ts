/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:28:04
 * @modify date 2018-12-18 12:28:04
 * @desc [description]
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nameFlag = false;
  unameFlag = false;
  addressFlag = false;
  emailFlag = false;
  passwordFlag = false;
  cpasswordFlag = false;
  phoneFlag = false;
  regFlag = false;
  userData: any;

  @ViewChild('unamespan') unamespan: ElementRef;

  constructor(private router: Router, private validateservice: ValidateService) { }

  ngOnInit() {
  }

  /**
   * validateName( ) function to validate name
   * @param name
   */
  validateName(name: string) {
    const regx = /^[a-z ,.'-]+$/i;
    if ((name.length >= 3) && (regx.test(name))) {
      this.nameFlag = false;
      this.userData.name = name;
      return;
    }
    this.nameFlag = true;
  }

  /**
   * chechUname() function to validate username
   * @param uname
   */
  checkUname(uname: string): void {
    const domElement: HTMLElement = this.unamespan.nativeElement as HTMLElement;
    if ((uname.length >= 3)) {
      this.unameFlag = false;
      return;
    }
    domElement.innerHTML = 'invalid username';
    this.unameFlag = true;
  }

  /**
   * validateUname() function to check existance of username in database
   * @param uname
   */
  validateUName(uname: string) {
    const domElement: HTMLElement = this.unamespan.nativeElement as HTMLElement;
    if ((uname.length >= 3)) {
      this.validateservice.validateUname(uname)
        .subscribe((resultObj: any) => {
          if (resultObj) {
            this.unameFlag = false;
            this.userData.uname = uname;
            return;
          }
          domElement.innerHTML = 'usename already exist';
          this.unameFlag = true;
        });
    }
    domElement.innerHTML = 'invalid username';
    this.unameFlag = true;
  }

  /**
   * validateAddress() function to check address validation
   * @param address
   */
  validateAddress(address: string) {
    if ((address.length >= 3)) {
      this.addressFlag = false;
      this.userData.address = address;
      return;
    }
    this.addressFlag = true;
  }

  /**
   * validEmail() function to check email validation
   * @param email
   */
  validateEmail(email: string) {
    const regExpr = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExpr.test(email) === true) {
      this.emailFlag = false;
      this.userData.email = email;
      return;
    }
    this.emailFlag = true;
  }

  /**
   * validtaePassword() function to check password validation
   * @param password
   */
  validatePassword(password: string) {
    const pswd = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    if (pswd.test(password) === true) {
      this.passwordFlag = false;
      return;
    }
    this.passwordFlag = true;
  }

  /**
   * confirmPassword() function to check password match
   * @param cpassword
   * @param password
   */
  confirmPassword(cpassword: string, password: string) {
    if ((cpassword === password) && !(this.passwordFlag)) {
      this.cpasswordFlag = false;
      this.userData.password = password;
      return;
    }
    this.cpasswordFlag = true;
  }

  /**
   * validatePhone() function to check phone validation
   * @param phone
   */
  validatePhone(phone: any): void {
    const phoneNo = /^\d{11}$/;
    if (phoneNo.test(phone) === true) {
      this.phoneFlag = false;
      this.userData.phone = phone;
      return;
    }
    this.phoneFlag = true;
  }

  /**
   * registerUser() function to register new user
   */
  registerUser() {
    if ((this.addressFlag) && (this.unameFlag) && (this.nameFlag) && (this.cpasswordFlag) && (this.phoneFlag) && (this.emailFlag) && (this.passwordFlag)) {
      this.regFlag = false;
      this.validateservice.regiser(this.userData)
        .subscribe((resultObj: any) => {
          if (resultObj) {
            this.router.navigate(['/login']);
            return;
          }
          alert('server error');
          return;
        });
    }
    this.regFlag = true;
  }
}
