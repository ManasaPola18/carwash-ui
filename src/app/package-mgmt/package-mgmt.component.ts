import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, DoCheck } from '@angular/core';
import { ServiceMgnt } from './service-mgnt';
import { CarwashservicesService } from '../carwashservices.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PackageDetails } from './package-details';

@Component({
  selector: 'app-package-mgmt',
  templateUrl: './package-mgmt.component.html',
  styleUrls: ['./package-mgmt.component.css']

})
export class PackageMgmtComponent implements OnInit, DoCheck {

  active = 1;
  successMsg:string;
  selectedService:ServiceMgnt = new ServiceMgnt();
  mgmtType:string = 'Select Options';

  packLists:PackageDetails[] = [];
  selectedPackageDetails:PackageDetails = new PackageDetails();

  serviceMgntList : ServiceMgnt[];
  addOnMgntList: ServiceMgnt[];
  serviceCost: number = 0;
  addonCost:number = 0;
  errorMsg:String;

  idSelectedFromListPage:number = 0;

  constructor(private carWashService : CarwashservicesService, private modalService: NgbModal, 
    private changeDetectorRef : ChangeDetectorRef) { 
    
  }

  ngOnInit(): void {
  }

  ngDoCheck():void {
    console.log("In ngOnChanges .................."+(this.idSelectedFromListPage != this.selectedPackageDetails.id));
    if (this.idSelectedFromListPage != 0 && this.idSelectedFromListPage != this.selectedPackageDetails.id) {
      this.editPackDetails(this.idSelectedFromListPage);
    }
    console.log("In ngOnChanges ..................");
  }

  mgmtTypeOnChange(type : string):void {
    this.selectedService = new ServiceMgnt();
    if (type != 'Packages') {
        this.carWashService.getWashCostList(type).subscribe((data:ServiceMgnt[])=>{
          this.serviceMgntList = data;
        });
    } else {
      this.serviceMgntList = [];
      this.selectedService = new ServiceMgnt();
    }
  }

  serviceNameChange():void {
    this.selectedService.cost = undefined ;
    const filtered:ServiceMgnt[] = this.serviceMgntList.filter(s => s.name.match(this.selectedService.name), true);
    if(filtered.length > 0) {
      this.selectedService.cost = filtered[0].cost;
      this.selectedService.id = filtered[0].id;
    } else {
      this.selectedService.cost = undefined;
      this.selectedService.id = undefined;
    }
  }

  saveService(type:string):void {
    console.log(this.selectedService);
    if (this.selectedService.id != undefined && this.selectedService.id != '') {
      this.carWashService.updateWashCost(this.selectedService).subscribe((data:ServiceMgnt)=>{
        this.mgmtTypeOnChange(type);
        if(data.id != '') {
          this.successMsg = "Updated Successfully!"
        }
      });
    } else {
      this.selectedService.type = type;
      this.carWashService.saveWashCosts(this.selectedService).subscribe((data:ServiceMgnt)=>{
        this.mgmtTypeOnChange(type);
        if(data.id != '') {
          this.successMsg = "Saved Successfully!"
        }
      });
    }
  }

  closeResult = '';

  open(content) {
    this.listOfPackages();
    this.getServiceMgntList('Services');
    this.getServiceMgntList('Add-ons');
    this.newPackage();
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

  getServiceMgntList(type : string):void {
      this.carWashService.getWashCostList(type).subscribe((data:ServiceMgnt[])=>{
        if(type == 'Services') {
          this.serviceMgntList = data;
        } else if (type == 'Add-ons') {
          this.addOnMgntList = data;
        }
      });
  } 

  editPackDetails(id:number) {
    this.idSelectedFromListPage = id;
    console.log("in edit pack details ..... "+id);
    this.carWashService.getPackageDetailsById(id).subscribe((data : PackageDetails) => {
        this.selectedPackageDetails = data;
        console.log(this.selectedPackageDetails);
        this.active = 2;
        this.changeDetectorRef.markForCheck();
    });
  }

  displayServiceCost() {
    const filtered:ServiceMgnt[] = this.serviceMgntList.filter(s => (s.id == this.selectedPackageDetails.serviceId));
    this.serviceCost = filtered[0].cost;
    this.selectedPackageDetails.totalCost = this.addonCost + this.serviceCost;
    this.calculateDiscount();
  }

  addonChange() {
    console.log("this.selectedPackageDetails.addOnId...."+this.selectedPackageDetails.addOnId);
    let cost = 0;
    this.carWashService.getWashCostsByIds(this.selectedPackageDetails.addOnId).subscribe((data:ServiceMgnt[])=> {
      let list:ServiceMgnt[] = data;
      console.log(list);
      for(let i=0; i < list.length; i++) {
        cost = cost + list[i].cost;
      }
      this.addonCost = cost;
      this.selectedPackageDetails.totalCost = this.addonCost + this.serviceCost;
      this.calculateDiscount();
    });
  }

  calculateDiscount() {
    this.selectedPackageDetails.discountCost = this.selectedPackageDetails.totalCost*(1-(this.selectedPackageDetails.discount/100));
  }

  newPackage() {
    this.selectedPackageDetails = new PackageDetails();
    this.serviceCost = 0;
    this.addonCost = 0;
  } 
  
  savePackageDetails() {
    console.log("Addon id s ..." +this.selectedPackageDetails.addOnId);
    if (!this.validateModel()) {
      return;
    }
    if (this.selectedPackageDetails.id != undefined) {
      this.carWashService.updatePackageDetails(this.selectedPackageDetails).subscribe((data : PackageDetails) => {
        let index = this.packLists.findIndex(pack => pack.id == this.selectedPackageDetails.id);
        this.packLists[index] = data;
        this.successMsg = "Updated Successfully!"
      }); 
    } else {
      this.carWashService.savePackageDetails(this.selectedPackageDetails).subscribe((data : PackageDetails) => {
        this.packLists.push(data);
        this.successMsg = "Saved Successfully!"
      });
    }
    
  }

  validateModel():boolean {
    this.errorMsg = '';
    if (this.selectedPackageDetails.packageName == undefined || this.selectedPackageDetails.packageName=='') {
      this.errorMsg ="Enter package name";
      return false;
    }
    return true;
  };

 listOfPackages() : void{
    this.carWashService.getPackageDetails('').subscribe((data: PackageDetails[]) => {
  this.packLists = data;
    });
  }
  
}

