import { Component, OnInit } from '@angular/core';  
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-order-mgmt',
  templateUrl: './order-mgmt.component.html',
  styleUrls: ['./order-mgmt.component.css']
})
export class OrderMgmtComponent {
 
  orderType:string;

    constructor() {
     
    }

}