/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:18:44
 * @modify date 2018-12-18 12:18:44
 * @desc [description]
*/

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidateService, UserObject } from '../validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  id: any;
  nameFlag = false;
  unameFlag = false;
  addressFlag = false;
  emailFlag = false;
  passwordFlag = false;
  cpasswordFlag = false;
  phoneFlag = false;
  nameButtonFlag = false;
  unameButtonFlag = false;
  addressButtonFlag = false;
  emailButtonFlag = false;
  cpasswordButtonFlag = false;
  phoneButtonFlag = false;
  allUpdateFlag = false;
  userData: UserObject;

  @ViewChild('unamespan') unamespan: ElementRef;

  constructor(private route: ActivatedRoute, private validateservice: ValidateService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userData = {
      name: ' ',
      uname: ' ',
      email: '',
      address: ' ',
      password: ' ',
      phone: 1
    };
  }

  ngOnInit() {
    this.getUser();
  }

  /**
   * getUSer() function to list user details
   */
  getUser(): void {
    this.validateservice.getUser(this.id)
      .subscribe((userObject: any) => {
        this.userData = userObject;
      });
  }

  /**
   * validateName() function to check name validation
   * @param name
   */
  validateName(name: string) {
    const regx = /^[a-z ,.'-]+$/i;
    if ((name.length >= 3) && (regx.test(name))) {
      this.nameButtonFlag = true;
      this.nameFlag = false;
      this.userData.name = name;
      return;
    }
    this.nameButtonFlag = false;
    this.nameFlag = true;
  }

  /**
   * checkUname() function to check user name validation
   * @param uname
   */
  checkUname(uname: string): void {
    const domElement: HTMLElement = this.unamespan.nativeElement as HTMLElement;
    if ((uname.length >= 3)) {
      this.unameButtonFlag = true;
      this.unameFlag = false;
      return;
    }
    domElement.innerHTML = 'invalid username';
    this.unameButtonFlag = false;
    this.unameFlag = true;
  }

  /**
   * validateUName() function to check user name existance in database
   * @param uname
   */
  validateUName(uname: string) {
    const domElement: HTMLElement = this.unamespan.nativeElement as HTMLElement;
    if ((uname.length >= 3)) {
      this.validateservice.validateUname(uname)
        .subscribe((resultObj: any) => {
          if (resultObj) {
            this.unameButtonFlag = true;
            this.unameFlag = false;
            this.userData.uname = uname;
            return;
          }
          domElement.innerHTML = 'usename already exist';
          this.unameButtonFlag = false;
          this.unameFlag = true;
        });
    }
    domElement.innerHTML = 'invalid username';
    this.unameButtonFlag = false;
    this.unameFlag = true;
  }

  /**
   * validateAddress() function to check address validation
   * @param address
   */
  validateAddress(address: string) {
    if ((address.length >= 3)) {
      this.addressButtonFlag = true;
      this.addressFlag = false;
      this.userData.address = address;
      return;
    }
    this.addressButtonFlag = false;
    this.addressFlag = true;
  }

  /**
   * validEmail() function to check email validation
   * @param email
   */
  validateEmail(email: string) {
    const regExpr = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExpr.test(email) === true) {
      this.emailButtonFlag = true;
      this.emailFlag = false;
      this.userData.email = email;
      return;
    }
    this.emailButtonFlag = false;
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
      this.cpasswordButtonFlag = true;
      this.cpasswordFlag = false;
      this.userData.password = password;
      return;
    }
    this.cpasswordButtonFlag = false;
    this.cpasswordFlag = true;
  }

  /**
   * validatePhone() function to check phone validation
   * @param phone
   */
  validatePhone(phone: any): void {
    const phoneNo = /^\d{11}$/;
    if (phoneNo.test(phone) === true) {
      this.phoneButtonFlag = true;
      this.phoneFlag = false;
      this.userData.phone = phone;
      return;
    }
    this.phoneButtonFlag = false;
    this.phoneFlag = true;
  }

  /**
   *  updateName() function to update name
   * @param id
   * @param name
   */
  updateName(id: any, name: string) {
    this.validateservice.updateName(id, name)
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.nameButtonFlag = false;
        }
      });
  }

  /**
   * updateUName() function to update uname
   * @param id
   * @param uname
   */
  updateUName(id: any, uname: string) {
    this.validateservice.updateUName(id, uname)
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.unameButtonFlag = false;
        }
      });
  }

  /**
   * updateAddress() function to update address
   * @param id
   * @param address
   */
  updateAddress(id: any, address: string) {
    this.validateservice.updateAddress(id, address)
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.addressButtonFlag = false;
        }
      });
  }

  /**
   * updateEmail() function to update email
   * @param id
   * @param email
   */
  updateEmail(id: any, email: string) {
    this.validateservice.updateEmail(id, email)
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.emailButtonFlag = false;
        }
      });
  }

  /**
   *  updatePhon() function to update phone
    * @param id
   * @param phone
   */
  updatePhone(id: any, phone: string) {
    this.validateservice.updatePhone(id, phone)
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.phoneButtonFlag = false;
        }
      });
  }

  /**
   * updateAll() function to update all user details
   */
  updateAll() {
    if ((this.addressButtonFlag) && (this.unameButtonFlag) && (this.nameButtonFlag) && (this.cpasswordButtonFlag) && (this.phoneButtonFlag) && (this.emailButtonFlag)) {
      this.allUpdateFlag = false;
      this.validateservice.updateAll(this.userData)
        .subscribe((resultObj: any) => {
          if (resultObj) {
            this.cpasswordButtonFlag = false;
            this.phoneButtonFlag = false;
            this.emailButtonFlag = false;
            this.addressButtonFlag = false;
            this.nameButtonFlag = false;
            this.unameButtonFlag = false;
            return;
          }
          alert('server error');
        });
      return;
    }
    this.allUpdateFlag = true;
  }
}
