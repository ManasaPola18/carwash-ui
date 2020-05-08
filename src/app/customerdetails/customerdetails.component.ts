import { Component, OnInit, SchemaMetadata } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {

    washRequestDate:Date;
    washRequestLocation:String;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private carWashService: CarwashservicesService
    ){

    }

    washRequestGo() {
      console.log("date :"+this.washRequestDate+" ...location :"+this.washRequestLocation);
      this.router.navigate(['/washrequest']);
    }
 
}





