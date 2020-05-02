import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Login } from './login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CarwashservicesService } from '../carwashservices.service';

@Component({ 
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carWashService: CarwashservicesService) {}

  model = new Login();

  ngOnInit(): void {
   
  }

  onSubmit() { 
    console.log(" emailId : "+this.model.email+" password : "+this.model.password);
    this.carWashService.isValidUser(this.model.email, this.model.password).subscribe(
        (data: String) => {
          if (data == 'Customer') {
            this.router.navigate(['/customerdetails']);
          } else if (data == 'Washer') {
            this.router.navigate(['/washdetails']);
          } else if (data=='ADMIN') {
            this.router.navigate(['/admin']);
         }
      }
    );
  }
 
}
