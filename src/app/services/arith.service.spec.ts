import { TestBed } from '@angular/core/testing';

import { ArithService } from './arith.service';

describe('ArithService', () => {
  let service: ArithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
