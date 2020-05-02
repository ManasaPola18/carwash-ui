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

const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent},
  { path: 'customerlogin/:userType', component: CustomerLoginComponent },
  { path: 'customerSignup', component: SignupcomponentComponent },
  { path: 'paymenthistory', component: PaymentDetailsComponent },
  { path: 'customerdetails', component: CustomerdetailsComponent },
  { path: 'washdetails', component: WasherdetailsComponent },
  { path: 'washrequest', component: WashrequestComponent},
  { path: 'admin', component: AdminComponent},
  { path: '',   redirectTo: '/introduction', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CustomerLoginComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
