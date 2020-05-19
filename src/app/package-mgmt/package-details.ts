import { ServiceMgnt } from './service-mgnt';

export class PackageDetails {

    id:number;
    serviceId:string;
    packageName:String;
    addOnId:string;
    totalCost:number;
    discount:number = 0;
    discountCost:number;
    status:String="Active";
    serviceName:string;

}