import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Customer} from './signupcomponent/customer';
import { HttpHeaders } from '@angular/common/http';
import { Car } from './car/car';
import { ServiceMgnt } from './package-mgmt/service-mgnt';
import { PackageDetails } from './package-mgmt/package-details';
import { Promomgmt } from './promo-mgmt/promomgmt';

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
  updateCarDetailsUrl:string = "http://localhost:8080/carwash/cardetails";
  savewashcostsUrl:string = "http://localhost:8080/carwash/savewashcost";
  updatewashcostUrl:string = "http://localhost:8080/carwash/updateWashCostDetails";
  getwashcostlistUrl:string = "http://localhost:8080/carwash/washcostslist";
  getWashcostdetailsUrl:string = "http://localhost:8080/carwash/getwashcosts";
  savePackageDetailsUrl:string = "http://localhost:8080/carwash/savepackagedetails";
  updatePackageDetailsUrl:string = "http://localhost:8080/carwash/updatepackagedetails";
  packageDetailsUrl:string = "http://localhost:8080/carwash/packagedetails";
  getWashCostsByIdsUrl:string = "http://localhost:8080/carwash/getWashCostsByIds";
  getPackageDetailsByIdUrl:string = "http://localhost:8080/carwash/packagedetailsbyid";
  savePromoCodeDetailsUrl:string = "http://localhost:8080/carwash/savePromocodes"
  updatePromoCodeUrl:string = "http://localhost:8080/carwash/updatepromodetails"
  getPromocodesByNameUrl:string = "http://localhost:8080/carwash/getPromocodesByName"

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

  saveUserDetails(customer: Customer) : Observable<Customer> {
    return this.http.post<Customer>(this.saveUserDetailsUrl, customer, this.jsonHttpOptions)
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

  updateCarDetails(car: Car) : Observable<boolean> {
    return this.http.post<boolean>(this.updateCarDetailsUrl, car, this.jsonHttpOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  saveWashCosts(serviceCost:ServiceMgnt) : Observable<ServiceMgnt> {
    return this.http.post<ServiceMgnt>(this.savewashcostsUrl, serviceCost, this.jsonHttpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  updateWashCost(serviceCost:ServiceMgnt) : Observable<ServiceMgnt> {
    return this.http.post<ServiceMgnt>(this.updatewashcostUrl, serviceCost, this.jsonHttpOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  getWashCostList(type:string) : Observable<ServiceMgnt[]> {
    return this.http.get<ServiceMgnt[]>(this.getwashcostlistUrl+"?type="+type, this.jsonHttpOptions);
  }
 
  savePackageDetails(packagedetails:PackageDetails) : Observable<PackageDetails> {
    return this.http.post<PackageDetails>(this.savePackageDetailsUrl, packagedetails, this.jsonHttpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePackageDetails(packagedetails:PackageDetails) : Observable<PackageDetails> {
    return this.http.post<PackageDetails>(this.updatePackageDetailsUrl, packagedetails, this.jsonHttpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getPackageDetails(packageName:string) : Observable<PackageDetails[]> {
    return this.http.get<PackageDetails[]>(this.packageDetailsUrl+"?packageName="+packageName, this.jsonHttpOptions);
  }
  
  getWashCostsByIds(ids:string) :Observable<ServiceMgnt[]> {
    return this.http.get<ServiceMgnt[]>(this.getWashCostsByIdsUrl+"?id="+ids, this.jsonHttpOptions);
  }
  
  getPackageDetailsById(id:number) : Observable<PackageDetails> {
    return this.http.get<PackageDetails>(this.getPackageDetailsByIdUrl+"?id="+id, this.jsonHttpOptions);
  }

  savePromoCode(promodetails:Promomgmt) : Observable<Promomgmt> {
    return this.http.post<Promomgmt>(this.savePromoCodeDetailsUrl,promodetails,this.jsonHttpOptions ).pipe(
      catchError(this.handleError)
    );
  }

  updatePromoCode(promodetails:Promomgmt) : Observable<boolean> {
    return this.http.post<boolean>(this.updatePromoCodeUrl,promodetails,this.jsonHttpOptions ).pipe(
      catchError(this.handleError)
    );
  }

  getPromocodesByName(id:number) : Observable<Promomgmt> {
    return this.http.get<Promomgmt>(this.getPromocodesByNameUrl+"?id="+id, this.jsonHttpOptions);
  }

}
