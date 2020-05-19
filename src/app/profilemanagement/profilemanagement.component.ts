import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { CarwashservicesService } from '../carwashservices.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserListService } from './update-user-list-service';
import { Customer } from '../signupcomponent/customer';

@Component({
  selector: 'app-profilemanagement',
  templateUrl: './profilemanagement.component.html',
  styleUrls: ['./profilemanagement.component.css']
})
export class ProfilemanagementComponent implements OnInit {
  userType:string = '';
  emailIds: string[] = [];
  selectedEmailId:string = '';
  dropDownBtnName:string = '';

  constructor(private carwashservice:CarwashservicesService, 
    private router: Router, private ref: ChangeDetectorRef,
    private updateUserListService : UpdateUserListService) {
      this.updateUserListService.newCustomer.subscribe((data:string)=>{
        this.emailIds.push(data);
      });
     }

  ngOnInit(): void {
    
  }

  onUserTypeChange(userType:string) {
    console.log("In on usertype change.."+userType);
      this.dropDownBtnName = (userType == 'Customer' ? 'Edit' : 'Add/Edit Washer');
      this.selectedEmailId = "Select User";
      this.carwashservice.getUserList(userType).subscribe((data:string[])=> {
        this.emailIds = data;
        this.ref.markForCheck();
      });    
  }
}
