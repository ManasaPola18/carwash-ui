import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarwashservicesService } from '../carwashservices.service';
import { Customer } from '../signupcomponent/customer';
import { Car } from '../car/car';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {

  @Input() selectedEmailId:string;
  userModel:Customer;
  errorMsg:String = '';
  cars:Car[] = [];

  constructor(private modalService: NgbModal, 
    private carWashService: CarwashservicesService, 
    public activeModal: NgbActiveModal) {   }

  ngOnInit(): void {
  }
  closeResult = '';

  

  open(content:any) {

    this.carWashService.getUserDetails(this.selectedEmailId).subscribe((data:Customer) => {
        this.userModel = data;
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateUserProfile() {
    console.log("customer id ::: "+this.userModel.id);
    this.carWashService.updateUserDetails(this.userModel).subscribe((data:boolean)=>{
        console.log("update user details "+data);
        if(data){
          this.errorMsg ='successfully updated';
        }
    });
  }

  getCarDetails() {
    console.log("In getcardetails");
    this.carWashService.getCars(this.userModel.id).subscribe((data:Car[]) => {
      this.cars = data;
    });
  }

}
