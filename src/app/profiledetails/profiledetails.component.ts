import { Component, OnInit, Input, AfterViewInit, Renderer2, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarwashservicesService } from '../carwashservices.service';
import { Customer } from '../signupcomponent/customer';
import { Car } from '../car/car';
import { UpdateUserListService } from '../profilemanagement/update-user-list-service';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit, OnChanges {

  @Input() selectedEmailId:string;
  @Input() selectedUserType:string;
  selectedCarId:Number;
  active = 1;
  userModel:Customer;
  errorMsg:String = '';
  successMsg:String = '';
  cars:Car[] = [];
  displayCarTabs:string = 'block';
  profileBtnName:string;

  public unamePattern:string = "^[a-z0-9_-]{4,15}$";
  public mobnumPattern:string = "[0-9]{10}$"; 
  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private modalService: NgbModal, 
    private carWashService: CarwashservicesService, 
    public activeModal: NgbActiveModal,private render: Renderer2, 
    private changeDetectorRef : ChangeDetectorRef, 
    private updateUserListService : UpdateUserListService) {  
      
     }

  ngOnInit(): void {
  }

 /*  ngAfterViewInit(): void {
    console.log("In after view init");
    this.profileBtnName = (this.selectedEmailId == 'Select User' ? "Add Profile" : "Edit Profile");  
    this.changeDetectorRef.markForCheck();
  } */

  ngOnChanges() {
    this.profileBtnName = (this.selectedEmailId == 'Select User' ? "Add Profile" : "Edit Profile");  
  }

  closeResult = '';

  

  open(content:any) {
    this.selectedCarId = undefined; 
    console.log("this.selectedEmailId    "+this.selectedEmailId);
    this.displayCarTabs = (this.selectedUserType == 'Washer' ? 'none' : 'block');
    if (this.selectedEmailId != 'Select User') {
      this.carWashService.getUserDetails(this.selectedEmailId).subscribe((data:Customer) => {
        this.userModel = data;
        this.getCars();
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    });
    } else {
      this.userModel = new Customer();
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  getDismissReason(reason: any): string {
    this.errorMsg = '';
    this.successMsg= '';
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateUserProfile() {
    this.errorMsg = '';
    this.successMsg= '';
    console.log("customer id ::: "+this.userModel.id);
    if (!this.validateModel()) {
      return;
    } else {
      if(this.userModel.id == undefined) {
          this.userModel.userType = this.selectedUserType;
          this.carWashService.saveUserDetails(this.userModel).subscribe((data:Customer)=>{
            console.log("Saved user details "+data);
            if (data) {
              this.successMsg ='Successfully Added';
              this.userModel = data;
              this.updateUserListService.addUserEmailId(this.userModel.emailId);
            }
          });
      } else {
        this.carWashService.updateUserDetails(this.userModel).subscribe((data:boolean)=>{
          console.log("update user details "+data);
          if(data){
            this.successMsg ='Successfully updated';
          }
        });
      }
    }
  }

  getCars() {
    console.log("In getcardetails");
    this.carWashService.getCars(this.userModel.id).subscribe((data:Car[]) => {
      this.cars = data;
      console.log("update user details "+data);
    });
  }

  validateModel():boolean {
    this.errorMsg = '';
    let userName = new RegExp(this.unamePattern);
    let mobileNumber = new RegExp(this.mobnumPattern);
    let email = new RegExp(this.emailPattern);
    
     
    if (this.userModel.name == undefined || !userName.test(this.userModel.name)) {
      console.log("In name");
      this.errorMsg ="Name need to be atleast 4 to 15 characters and special characters -,_";
      return false;
    }
    if (this.userModel.phNum == undefined || !mobileNumber.test(this.userModel.phNum)) {
      this.errorMsg ="Mobile number should be of 10 digits";
      return false;
    }
    if (this.userModel.emailId == undefined || !email.test(this.userModel.emailId)) {
      this.errorMsg ="Enter valid email address";
      return false;
    }
    return true;
  }

  editCarDetails(id:Number) {
    console.log("Car Id :: "+id);
    this.selectedCarId = id;
    this.active = 3;
  }

  clickCarDetails() {
    this.selectedCarId = undefined;
  }
}
