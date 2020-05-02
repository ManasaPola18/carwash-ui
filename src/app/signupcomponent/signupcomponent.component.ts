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

  constructor(private carwashservicesService : CarwashservicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  model = new Customer();

  saveUserDetails(f:NgForm){
     this.carwashservicesService.saveUserDetails(this.model).subscribe((data: String)=>{
      console.log("Re-directing to Login page");
      this.router.navigate(['/customerlogin', f.value.userType]);
      })  ;
  };
}
