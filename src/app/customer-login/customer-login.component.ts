import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Login } from './login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarwashservicesService } from '../carwashservices.service';
import { SignupcomponentComponent } from '../signupcomponent/signupcomponent.component';
import { stringify } from 'querystring';

@Component({ 
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  errorMsg:string;
  public unamePattern:string = "^[a-z0-9_-]{4,15}$";
  public mobnumPattern:string = "[0-9]{10}$"; 
  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userType:string = '';
  userId:string = ''; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carWashService: CarwashservicesService) {}

  model = new Login();

  ngOnInit(): void {
   
  }

  onSubmit() { 
    this.errorMsg='';
    let userName = new RegExp(this.unamePattern);
    let email = new RegExp(this.emailPattern);

    console.log(this.model.password);
    console.log(!userName.test(this.model.password));
    console.log(!email.test(this.model.email));
    console.log(!userName.test(this.model.password) || !email.test(this.model.email));
    if (!userName.test(this.model.password) || !email.test(this.model.email)) {
      this.errorMsg ="Invalid email or password.";
      this.model = new Login();
      return;
    }

    this.carWashService.isValidUser(this.model.email, this.model.password).subscribe(
        (data: String) => { 
          console.log("data::"+data);
          if(data.indexOf("Customer") | data.indexOf("Washer") | data.indexOf("ADMIN")) {
            console.log("In if condition for splitting");
            let userdetails:string[] = data.split("-");
            this.userType = userdetails[0];
            this.userId = userdetails[1];
            console.log("User type ::"+this.userType);
            localStorage.setItem("userType", this.userType);
            localStorage.setItem("userId", this.userId);
            document.getElementById('loginStatus').innerHTML="Logout";
          } else {
            this.errorMsg ="Invalid email or password.";
            this.model = new Login();
            return;
          }

          if (this.userType == 'Customer') {
            this.router.navigate(['/customerdetails']);
          } else if (this.userType == 'Washer') {
            this.router.navigate(['/washdetails']);
          } else if (this.userType=='ADMIN') {
            this.router.navigate(['/admin']);
         } 
      }
    );
  }
 
}
