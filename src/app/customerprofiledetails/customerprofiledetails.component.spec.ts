import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofiledetailsComponent } from './customerprofiledetails.component';

describe('CustomerprofiledetailsComponent', () => {
  let component: CustomerprofiledetailsComponent;
  let fixture: ComponentFixture<CustomerprofiledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprofiledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprofiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
