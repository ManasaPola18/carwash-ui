import { Component, OnInit, Input } from '@angular/core';
import { Car } from './car';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  successMsg:String = '';
  errorMsg:String = '';
  @Input() customerId:number;
  carTypes:string[] = ['Hatchback', 'Sedan', 'MPV', 'SUV', 'Crossover', 'Coupe', 'Convertible'];
  public carNumPattern:string = "^[a-z0-9_-]{10,17}$"
  public regNumPattern:string = "^[a-z0-9_-]{30}$"
   
  constructor(private carWashService:CarwashservicesService) { }
 
  ngOnInit(): void {
  }

  model = new Car();

  saveCar() {
    this.model.custId = this.customerId;
    if (!this.validateModel()) {
      return;
    }else{
    this.carWashService.addCar(this.model).subscribe((data:boolean) => {
      console.log("Added car :: "+data);
      if(data){
        this.successMsg ='Successfully updated';
        }
      });
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
    if (this.model.carColor == undefined || this.model.carColor!='') {
      this.errorMsg ="Enter color";
      return false;
    }
    if (this.model.regNum == undefined || !regNum.test(this.model.regNum)) {
      this.errorMsg ="Enter valid registration number";
      return false;
    }
    return true;
  };
}
