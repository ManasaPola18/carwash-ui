import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { from } from 'rxjs';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionComponent } from './introduction/introduction.component';
import { HttpClientModule } from '@angular/common/http';
import { CarwashservicesService } from './carwashservices.service';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { WasherdetailsComponent } from './washerdetails/washerdetails.component';
import { WashrequestComponent } from './washrequest/washrequest.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    PaymentDetailsComponent,
    SignupcomponentComponent,
    IntroductionComponent,
    CustomerdetailsComponent,
    WasherdetailsComponent,
    WashrequestComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CarwashservicesService],
  bootstrap: [AppComponent]


})
export class AppModule { }