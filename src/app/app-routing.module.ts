import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';

const routes: Routes = [
  { path: 'customerlogin', component: CustomerLoginComponent },
  { path: 'customerSignup', component: SignupcomponentComponent },
  { path: 'paymenthistory', component: PaymentDetailsComponent },
  { path: '',   redirectTo: '/customerlogin', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CustomerLoginComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
