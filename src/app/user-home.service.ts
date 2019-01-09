/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-14 16:43:36
 * @modify date 2018-12-14 16:43:36
 * @desc [description]
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserHomeService {

  constructor( private http: HttpClient ) { }

  /**
   * getUser() function for getting user details from db
   * @param id
   */
  getUser(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(`/api/userhome/getdetails`, { params: params }).pipe(
      catchError(this.handleError('getUser', []))
    );
  }

  /**
   * uploadImage() function to upload image to server
   * @param imgString
   * @param id
   */
  uploadImage(imgString: any, id: any): Observable<any> {
    return this.http.post(`/api/userhome/uploadImage`, { 'id': id, 'img': imgString }).pipe(
      catchError(this.handleError('uploadImage', []))
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
