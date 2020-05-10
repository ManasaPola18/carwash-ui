import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { WasherdetailsComponent } from './washerdetails/washerdetails.component';
import { WashrequestComponent } from './washrequest/washrequest.component';
import { AdminComponent } from './admin/admin.component';
import {OrderMgmtComponent} from './order-mgmt/order-mgmt.component';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';
import { AuthService } from './customer-login/auth-service';

const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent},
  { path: 'customerlogin/:userType', component: CustomerLoginComponent},
  { path: 'customerSignup', component: SignupcomponentComponent},
  { path: 'paymenthistory', component: PaymentDetailsComponent, canActivate: [AuthService]},
  { path: 'customerdetails', component: CustomerdetailsComponent , canActivate: [AuthService]},
  { path: 'washdetails', component: WasherdetailsComponent, canActivate: [AuthService]},
  { path: 'washrequest', component: WashrequestComponent, canActivate: [AuthService]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthService]},
  { path: 'orders', component: OrderMgmtComponent, canActivate: [AuthService]},
  { path: 'profileManagement/:emailid', component: ProfilemanagementComponent, canActivate: [AuthService]},
  { path: '',   redirectTo: '/introduction', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CustomerLoginComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
