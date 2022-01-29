import { TestBed } from '@angular/core/testing';

import { Categories.ServicesService } from './categories.services.service';

describe('Categories.ServicesService', () => {
  let service: Categories.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categories.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
