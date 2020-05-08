import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMgmtComponent } from './package-mgmt.component';

describe('PackageMgmtComponent', () => {
  let component: PackageMgmtComponent;
  let fixture: ComponentFixture<PackageMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
