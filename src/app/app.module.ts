import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { from } from 'rxjs';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    PaymentDetailsComponent,
    SignupcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
