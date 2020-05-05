import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Customer} from './signupcomponent/customer';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarwashservicesService {

  saveUserDetailsUrl:string = "http://localhost:8080/carwash/saveCustomer";
  isValidUserUrl:string = "http://localhost:8080/carwash/login";
  getUserListUrl:string = "http://localhost:8080/carwash/userList"
 
  saveUserDetailsHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  
  
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  saveUserDetails(customer: Customer) : Observable<any> {
    return this.http.post<any>(this.saveUserDetailsUrl, customer, this.saveUserDetailsHttpOptions)
      .pipe(
        catchError(this.handleError)
      );
  };

  isValidUser(email:String, password:String) : Observable<String> {
    return this.http.get(this.isValidUserUrl+"?email="+email+"&password="+password,
    {responseType: 'text'});
  }
  
  getUserList(userType:String) : Observable<string[]> {
    return this.http.get<string[]>(this.getUserListUrl+"?userType="+userType);
  }

}