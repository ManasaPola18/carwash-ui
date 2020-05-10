import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CarwashservicesService } from '../carwashservices.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.css']
})
export class SignupcomponentComponent implements OnInit {

  errorMsg:String = '';
  confirmPassword:string;
  public unamePattern:string = "^[a-z0-9_-]{4,15}$";
  public mobnumPattern:string = "[0-9]{10}$"; 
  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private carwashservicesService : CarwashservicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  model = new Customer();

  saveUserDetails(f:NgForm){
    if (!this.validateModel()) {
        return;
    }
     this.carwashservicesService.saveUserDetails(this.model).subscribe((data: Customer)=>{
     
      console.log("Re-directing to Login page");
      this.router.navigate(['/customerlogin', f.value.userType]);
      })  ;
  };

  validateModel():boolean {
    this.errorMsg = '';
    let userName = new RegExp(this.unamePattern);
    let mobileNumber = new RegExp(this.mobnumPattern);
    let email = new RegExp(this.emailPattern);
    
    if(this.model.userType == ''){
      this.errorMsg="Please select user type.";
      return false;
    }
       
    if (this.model.name == undefined || !userName.test(this.model.name)) {
      console.log("In name");
      this.errorMsg ="Name need to be atleast 4 to 15 characters and special characters -,_";
      return false;
    }
    if (this.model.password == undefined || !userName.test(this.model.password)) {
      this.errorMsg ="Password need to be atleast 4 to 15 characters and special characters -,_ to be atleast 6 to 12 characters  a-z,A-Z,0-9 and special characters";
      return false;
    }
    if (this.confirmPassword != this.model.password){
      this.errorMsg ="Password and Confirm password should match";
      return false;
    }
    if (this.model.phNum == undefined || !mobileNumber.test(this.model.phNum)) {
      this.errorMsg ="Mobile number should be of 10 digits";
      return false;
    }
    if (this.model.emailId == undefined || !email.test(this.model.emailId)) {
      this.errorMsg ="Enter valid email address";
      return false;
    }
    return true;
  };

}
