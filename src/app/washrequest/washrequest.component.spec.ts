import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashrequestComponent } from './washrequest.component';

describe('WashrequestComponent', () => {
  let component: WashrequestComponent;
  let fixture: ComponentFixture<WashrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
