import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Login } from './login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarwashservicesService } from '../carwashservices.service';
import { SignupcomponentComponent } from '../signupcomponent/signupcomponent.component';

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
          if (data == 'Customer') {
            this.router.navigate(['/customerdetails']);
          } else if (data == 'Washer') {
            this.router.navigate(['/washdetails']);
          } else if (data=='ADMIN') {
            this.router.navigate(['/admin']);
         } else {
          this.errorMsg ="Invalid email or password.";
          this.model = new Login();
         }
      }
    );
  }
 
}
