import { Component, OnInit, Input } from '@angular/core';
import { Car } from './car';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  errorMsg:String = '';
  @Input() customerId:number;
  carTypes:string[] = ['Hatchback', 'Sedan', 'MPV', 'SUV', 'Crossover', 'Coupe', 'Convertible'];
  constructor(private carWashService:CarwashservicesService) { }
 
  ngOnInit(): void {
  }

  model = new Car();

  saveCar() {
    this.model.custId = this.customerId;
    this.carWashService.addCar(this.model).subscribe((data:boolean) => {
      console.log("Added car :: "+data);
      if(data){
        this.errorMsg ='successfully updated';
      }
    });
  }

  

}
