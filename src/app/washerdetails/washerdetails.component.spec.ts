import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherdetailsComponent } from './washerdetails.component';

describe('WasherdetailsComponent', () => {
  let component: WasherdetailsComponent;
  let fixture: ComponentFixture<WasherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
