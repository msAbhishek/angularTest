/**
 * @author [Abhishek m s]
 * @email [abhishekmsams54@gmail.com]
 * @create date 2018-12-14 16:44:01
 * @modify date 2018-12-14 16:44:01
 * @desc [description]
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient) { }

  /**
   * login()function for login check
   * @param name
   * @param password
   */
  login(name: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('uname', name);
    params = params.append('password', password);
    return this.http.get(`/api/log`, { params: params }).pipe(
      catchError(this.handleError('login', []))
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
