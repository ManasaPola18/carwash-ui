import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class AuthService implements CanActivate {

    constructor(private router : Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("In Auth Service  "+localStorage.getItem("userId"));
      if (localStorage.getItem("userId") != null && localStorage.getItem("userId") != '') {
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