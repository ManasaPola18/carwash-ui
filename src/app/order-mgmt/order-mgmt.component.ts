import { Component, OnInit } from '@angular/core';  
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-order-mgmt',
  templateUrl: './order-mgmt.component.html',
  styleUrls: ['./order-mgmt.component.css']
})
export class OrderMgmtComponent implements OnInit {

  public datePattern:string = "^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$"
  errorMsg:string ='';

  fromDate:NgbDateStruct;
  toDate:NgbDateStruct;

  constructor() { }

  ngOnInit(): void {

  }

  washNow(){
    
  }

  scheduleLater(){
      if (!this.validateModel()) {
      return;
    }
  }

  validateModel():boolean {
    this.errorMsg = '';
    //formatDate(this.fromDate);
/*    console.log("form date ::" +(this.fromDate.|JsonPipe));
   if () */
    return true;
  }
}