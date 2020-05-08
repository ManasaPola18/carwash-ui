import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoMgmtComponent } from './promo-mgmt.component';

describe('PromoMgmtComponent', () => {
  let component: PromoMgmtComponent;
  let fixture: ComponentFixture<PromoMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
