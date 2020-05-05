import { Component, OnInit } from '@angular/core';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userType: String = '';
  emailIds: string[];


  constructor(private carwashservice:CarwashservicesService) { }

  ngOnInit(): void {
    
  }

  onUserTypeChange(userType:string) {
    console.log("In on usertype change");
    this.carwashservice.getUserList(userType).subscribe((data:string[])=> {
      console.log("data :::::::::::::::: "+data);
      let optionsText = '<option value="" disabled selected>Select User</option>';
      for (let i = 0; i< data.length; i++) {
        optionsText+='<option value="'+data[i]+'">'+data[i]+"</option>"
      }
      document.getElementById('emailIds').innerHTML = optionsText;
    });
  }



}
