import { Component, OnInit } from '@angular/core';
import { Promomgmt } from './promomgmt';
import { CarwashservicesService } from '../carwashservices.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-promo-mgmt',
  templateUrl: './promo-mgmt.component.html',
  styleUrls: ['./promo-mgmt.component.css']
})
export class PromoMgmtComponent implements OnInit {

  active=1;
  successMsg:string;
  errorMsg:string;

  promoCodes:Promomgmt[] = [];
  selectedPromo:Promomgmt = new Promomgmt();

  constructor(private carWashService : CarwashservicesService,private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  closeResult = '';

  open(content) {
   // this.listOfPromos();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  } 

  /* editPromo(id:number) {
    //this.idSelectedFromListPage = id;
    console.log("in edit pack details ..... "+id);
    this.carWashService.getPromocodesByName(id).subscribe((data : Promomgmt) => {
        this.selectedPromo = data;
        console.log(this.selectedPromo);
        this.active = 2;
        //this.changeDetectorRef.markForCheck();
    });
  }
 */
  savePromo(){
    console.log("this.selectedPromo.id       ............"+this.selectedPromo.id );
    if(this.selectedPromo.id != undefined && this.selectedPromo.id != '') {
      this.carWashService.updatePromoCode(this.selectedPromo).subscribe((data: boolean)=>{
        /* if(data){
          this.successMsg ='Successfully updated';
        } */
        
        console.log("this.selectedPromo.id data" +data);
         if(data == true){
           this.successMsg = "Updated successfully";
         }
      });
    }
    else{
       this.carWashService.savePromoCode(this.selectedPromo).subscribe((data:Promomgmt)=>{
        this.selectedPromo = data;
        console.log("this.selectedPromo.id" +this.selectedPromo.id);
        if(this.selectedPromo.id != ''){
          this.successMsg = "Saved successfully";
          }
         /*  this.promoCodes.push(data);
          this.successMsg = "Saved Successfully!" */
      });
    
    } 
  }

 /*  listOfPromos() : void{
    this.carWashService.getPromocodesByName('').subscribe((data: Promomgmt[]) => {
    this.promoCodes = data;
    });
  } */
}