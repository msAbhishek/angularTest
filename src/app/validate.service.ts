/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-14 16:32:47
 * @modify date 2018-12-14 16:32:47
 * @desc [description]
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ValidateService {

  constructor(private http: HttpClient) { }

  /**
   * validateUname() function to chech username repetion in database
   * @param uname
   */
  validateUname(uname: string) {
    let params = new HttpParams();
    params = params.append('uname', uname);
    return this.http.get(`/api/userEdit/checkusername`, { params: params }).pipe(
      catchError(this.handleError('validateUname', []))
    );
  }

  /**
   * getUser() function for fetching userdata on page load
   * @param id
   */
  getUser(id: any) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(`/api/userhome/getdetails`, { params: params }).pipe(
      catchError(this.handleError('getUser', []))
    );
  }

  /**
   * updateName() function to update name
   * @param id
   * @param name
   */
  updateName(id: any, name: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('name', name);
    return this.http.get(`/api/useredit/updatename`, { params: params });
  }

  /**
   * updateUName() function to update user name
   * @param id
   * @param uname
   */
  updateUName(id: any, uname: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('uname', uname);
    return this.http.get(`/api/useredit/updateuname`, { params: params });
  }

  /**
   * updateEmail() function to update email
   * @param id
   * @param email
   */
  updateEmail(id: any, email: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('email', email);
    return this.http.get(`/api/useredit/updateemail`, { params: params });
  }

  /**
   * updateAddress() function to update address
   * @param id
   * @param address
   */
  updateAddress(id: any, address: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('address', address);
    return this.http.get(`/api/useredit/updateaddress`, { params: params });
  }

  /**
   * updatePhone() function to update phone
   * @param id
   * @param phone
   */
  updatePhone(id: any, phone: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('phone', phone);
    return this.http.get(`/api/useredit/updatephone`, { params: params });
  }

  /**
   *  updatePassword() function to update password
   * @param id
   * @param password
   */
  updatePassword(id: any, password: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('password', password);
    return this.http.get(`/api/useredit/updatepassword`, { params: params });
  }

  /**
   * updateAll() function to update all user details
   * @param userObj
   */
  updateAll(userObj: any):  Observable<any> {
    let params = new HttpParams();
    params = params.append('id', userObj.id);
    params = params.append('uname', userObj.uname);
    params = params.append('name', userObj.name);
    params = params.append('address', userObj.address);
    params = params.append('email', userObj.email);
    params = params.append('password', userObj.password);
    params = params.append('phone', userObj.phone);
    return this.http.get(`/api/useredit/updateall`, { params: params }).pipe(
      catchError(this.handleError('updateAll', []))
    );
  }
 /**
  * regiser() function to register new user
  * @param userObj
  */
  regiser(userObj: any):  Observable<any> {
    let params = new HttpParams();
    params = params.append('uname', userObj.uname);
    params = params.append('name', userObj.name);
    params = params.append('address', userObj.address);
    params = params.append('email', userObj.email);
    params = params.append('password', userObj.password);
    params = params.append('phone', userObj.phone);
    return this.http.get(`/api/reg`, { params: params }).pipe(
      catchError(this.handleError('regiser', []))
    );
  }

  /**
   * handleError() generic function to hande http error failures
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

/**
 * interface for user object type
 */
export interface UserObject {
  name: string;
  uname: string;
  email: string;
  address: string;
  password: string;
  phone: number;
}
