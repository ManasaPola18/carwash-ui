import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Login } from './login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({ 
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  loginModel = new Login();

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log(" emailId : "+this.loginModel.email+" password : "+this.loginModel.password);
    this.router.navigate(['/paymenthistory']);
  }
 
}
