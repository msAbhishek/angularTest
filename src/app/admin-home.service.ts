/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-18 12:15:38
 * @modify date 2018-12-18 12:15:38
 * @desc [description]
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  constructor( private http: HttpClient) { }

  /**
   * displayDetails() function to list all teh users
   */
  displayDetails(): Observable<any> {
    return this.http.get(`/api/adminhome/listall`, {}).pipe(
      catchError(this.handleError('displayDetails', []))
    );
  }

  /**
   * displayAdmins() function to display all the admins
   * @param id
   */
  displayAdmins(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(`/api/adminview/listall`, { params: params }).pipe(
      catchError(this.handleError('displayDetails', []))
    );
  }

/**
 * searchAdmin() function to searc admin from database
 * @param name
 * @param id
 */
  searchAdmin(name: string, id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('id', id);
    return this.http.get(`/api/adminsearch/listadmins`, { params: params }).pipe(
      catchError(this.handleError('searchUser', []))
    );
  }

  /**
   * searchUser() function to search a user from database
   * @param name
   * @param id
   */
  searchUser(name: string, id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('id', id);
    return this.http.get(`/api/adminsearch/list`, { params: params }).pipe(
      catchError(this.handleError('searchUser', []))
    );
  }

/**
 * deleteUser()function to delete a user
 * @param uname
 */
  deleteUser(uname: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('uname', uname);
    return this.http.get(`/api/adminhome/deleteuser`, { params: params }).pipe(
      catchError(this.handleError('deleteUser', []))
    );
  }

/**
 * makeAdmin()function to give admin privillage
 * @param uname
 */
  makeAdmin(uname: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('uname', uname);
    return this.http.get(`/api/adminhome//makeasadmin`, { params: params }).pipe(
      catchError(this.handleError('makeAdmin', []))
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
