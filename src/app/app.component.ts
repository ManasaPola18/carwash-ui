import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { LoginService } from './customer-login/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-wash-poc';
  userId:string;
  userType:string;
  loginBtnTitle:string = 'Login';

  constructor(private route: ActivatedRoute,
    private router: Router, private loginService:LoginService) {
      this.loginService.userId.subscribe((data:string)=> {
        this.userId = data;
      });
      this.loginService.userType.subscribe((data:string)=> {
        this.userType = data;
        this.loginBtnTitle = "Logout";
      });
      if (localStorage.getItem("userId")) {
        this.loginBtnTitle = "Logout";
      } 
  }

  ngOnInit(): void {
   
  }

  loginClick() {
    localStorage.removeItem("userType");
    localStorage.removeItem("userId");
    this.loginBtnTitle = "Login";
    this.router.navigate(["/customerlogin"]);
  }

}
