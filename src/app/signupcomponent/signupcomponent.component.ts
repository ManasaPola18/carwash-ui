import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.css']
})
export class SignupcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Customer();

  saveUserDetails(){
    console.log("User name :: "+this.model.name);
  };

}
