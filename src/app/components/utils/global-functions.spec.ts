import { TestBed } from '@angular/core/testing';

import { ButtonFunctionsService } from './global-functions';

describe('ButtonFunctionsService', () => {
  let service: ButtonFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
