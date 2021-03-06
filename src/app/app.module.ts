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
import { customerdetailsComponent } from './customerdetails/customerdetails.component';
import { WasherdetailsComponent } from './washerdetails/washerdetails.component';
import { WashrequestComponent } from './washrequest/washrequest.component';
import { AdminComponent } from './admin/admin.component';
import { OrderMgmtComponent } from './order-mgmt/order-mgmt.component';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { CarComponent } from './car/car.component';
import { PackageMgmtComponent } from './package-mgmt/package-mgmt.component';
import { PromoMgmtComponent } from './promo-mgmt/promo-mgmt.component';
import { ReportMgmtComponent } from './report-mgmt/report-mgmt.component';
import { LoginService } from './customer-login/login-service';
import { AuthGuard, httpInterceptorProviders } from './auth-guard';
import { CustomerprofiledetailsComponent } from './customerprofiledetails/customerprofiledetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    PaymentDetailsComponent,
    SignupcomponentComponent,
    IntroductionComponent,
    customerdetailsComponent,
    WasherdetailsComponent,
    WashrequestComponent,
    AdminComponent,
    OrderMgmtComponent,
    ProfilemanagementComponent,
    ProfiledetailsComponent,
    CarComponent,
    PackageMgmtComponent,
    PromoMgmtComponent,
    ReportMgmtComponent,
    CustomerprofiledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CarwashservicesService, NgbActiveModal, LoginService, httpInterceptorProviders],
  bootstrap: [AppComponent]


})
export class AppModule { }