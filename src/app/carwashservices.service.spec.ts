import { TestBed } from '@angular/core/testing';

import { CarwashservicesService } from './carwashservices.service';

describe('CarwashservicesService', () => {
  let service: CarwashservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarwashservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
