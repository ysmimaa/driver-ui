import { TestBed } from '@angular/core/testing';

import { InterceptersService } from './intercepters.service';

describe('InterceptersService', () => {
  let service: InterceptersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
