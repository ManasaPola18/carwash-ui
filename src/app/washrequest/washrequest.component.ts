import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarwashservicesService } from '../carwashservices.service';

@Component({
  selector: 'app-washrequest',
  templateUrl: './washrequest.component.html',
  styleUrls: ['./washrequest.component.css']
})
export class WashrequestComponent /*implements OnInit*/ {

  washRequestDate:Date;
  washRequestLocation:String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carWashService: CarwashservicesService
  ) { }

  /*ngOnInit(): void {
  }*/

  washDetailsGo() {
    console.log("date :"+this.washRequestDate+" ...location :"+this.washRequestLocation);
    this.router.navigate(['/washdetails']);
  }
}
