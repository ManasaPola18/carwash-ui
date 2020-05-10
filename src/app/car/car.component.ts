import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Car } from './car';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges {
  
  successMsg:String = '';
  errorMsg:String = '';
  @Input() customerId:number;
  @Input() carId:number;
  carTypes:string[] = ['Hatchback', 'Sedan', 'MPV', 'SUV', 'Crossover', 'Coupe', 'Convertible'];
  public carNumPattern:string = "^[a-z0-9_-]{10,17}$"
  public regNumPattern:string = "^[a-z0-9_-]{15,30}$"
   
  model = new Car();
  constructor(private carWashService:CarwashservicesService) {
    
   }
 
  ngOnInit(): void {
    console.log("In Car component ... carid :: "+this.carId);
    if(this.carId != undefined) {
      this.carWashService.getCarDetails(this.carId).subscribe((data:Car) => {
        this.model = data;
      })
    }
  }

  ngOnChanges():void {
    console.log("In ngOnChanges :: "+this.carId);
    if (this.carId == undefined) {
      this.model = new Car();
    }
  }

   saveCar() {
    this.model.custId = this.customerId;
    if (!this.validateModel()) {
      return;
    }else{
      if (this.model.id != undefined) {
          this.carWashService.updateCarDetails(this.model).subscribe((data:boolean)=>{
            if(data) {
              this.successMsg ='Successfully updated';
            }
          });
      } else {
        this.carWashService.addCar(this.model).subscribe((data:boolean) => {
          console.log("Added car :: "+data);
          if(data){
            this.successMsg ='Successfully Added';
            }
          });
      }
    
    }
  }

  validateModel():boolean {
    this.errorMsg = '';
    let carNum = new RegExp(this.carNumPattern); 
    let regNum = new RegExp(this.regNumPattern);

    if (this.model.carNum == undefined || !carNum.test(this.model.carNum)) {
      this.errorMsg ="Enter valid car number";
      return false;
    }
    if(this.model.carType == ''){
      this.errorMsg="Please select car type.";
      return false;
    }
    if (this.model.carColor == undefined || this.model.carColor=='') {
      this.errorMsg ="Enter color";
      return false;
    }
    if (this.model.regNum == undefined || !regNum.test(this.model.regNum)) {
      this.errorMsg ="Enter valid registration number";
      return false;
    }
    return true;
  };

  newCar():void {
    this.model = new Car();
  }
}
