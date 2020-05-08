import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { from } from 'rxjs';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionComponent } from './introduction/introduction.component';
import { HttpClientModule } from '@angular/common/http';
import { CarwashservicesService } from './carwashservices.service';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { WasherdetailsComponent } from './washerdetails/washerdetails.component';
import { WashrequestComponent } from './washrequest/washrequest.component';
import { AdminComponent } from './admin/admin.component';
import { OrderMgmtComponent } from './order-mgmt/order-mgmt.component';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { CarComponent } from './car/car.component';
import { PackageMgmtComponent } from './package-mgmt/package-mgmt.component';
import { PromoMgmtComponent } from './promo-mgmt/promo-mgmt.component';

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
    AdminComponent,
    OrderMgmtComponent,
    ProfilemanagementComponent,
    ProfiledetailsComponent,
    CarComponent,
    PackageMgmtComponent,
    PromoMgmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CarwashservicesService, NgbActiveModal],
  bootstrap: [AppComponent]


})
export class AppModule { }