import { TestBed } from '@angular/core/testing';

import { GlobalFunctions } from './global-functions';

describe('GlobalFunctions', () => {
  let service: GlobalFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFunctions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
