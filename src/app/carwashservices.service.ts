import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Customer} from './signupcomponent/customer';
import { HttpHeaders } from '@angular/common/http';
import { Car } from './car/car';

@Injectable({
  providedIn: 'root'
})
export class CarwashservicesService {

  saveUserDetailsUrl:string = "http://localhost:8080/carwash/saveCustomer";
  isValidUserUrl:string = "http://localhost:8080/carwash/login";
  getUserListUrl:string = "http://localhost:8080/carwash/userList"
  getUserDetailsUrl:string = "http://localhost:8080/carwash/userdetails";
  addCarUrl:string = "http://localhost:8080/carwash/addcar";
  getCarDetailsUrl:string = "http://localhost:8080/carwash/cardetails";
  getCarsUrl:string = "http://localhost:8080/carwash/cars";
  updateUserDetailsUrl:string = "http://localhost:8080/carwash/userdetails";
 
  jsonHttpOptions = {
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
    return this.http.post<any>(this.saveUserDetailsUrl, customer, this.jsonHttpOptions)
      .pipe(
        catchError(this.handleError)
      );
  };

  updateUserDetails(customer: Customer) : Observable<any> {
    return this.http.post<any>(this.updateUserDetailsUrl, customer, this.jsonHttpOptions)
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

  getUserDetails(email:String) : Observable<Customer> {
    return this.http.get<Customer>(this.getUserDetailsUrl+"?emailId="+email);
  }

  addCar(carDetails:Car) : Observable<boolean> {
    return this.http.post<any>(this.addCarUrl, carDetails, this.jsonHttpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCarDetails(id:Number) : Observable<Car> {
    return this.http.get<Car>(this.getCarDetailsUrl+"?id="+id);
  }
  
 getCars(custId:Number) : Observable<Car[]> {
   return this.http.get<Car[]>(this.getCarsUrl+"?custId="+custId, this.jsonHttpOptions);
 }
}
