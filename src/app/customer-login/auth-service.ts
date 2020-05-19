import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AuthService implements CanActivate {

    constructor(private router : Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("In Auth Service  "+localStorage.getItem("userType"));
      if (localStorage.getItem("userId") != null && localStorage.getItem("userId") != '') {
        if (localStorage.getItem("userType") == "ADMIN" ) {
            if (state.url.indexOf("washdetails") > 0 || state.url.indexOf("customerdetails") > 0) {
              this.router.navigate(['/admin']);
            }
        } else if (localStorage.getItem("userType") == "Customer") {
          if (state.url.indexOf("admin") > 0 || state.url.indexOf("washdetails") > 0) {
            this.router.navigate(['/customerdetails']);
          }
        } 
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: { 
            return: state.url
          }
        });
        return false;
      }
    }
  }