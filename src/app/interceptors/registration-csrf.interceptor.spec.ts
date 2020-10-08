import { TestBed } from '@angular/core/testing';

import { RegistrationCsrfInterceptor } from './registration-csrf.interceptor';

describe('RegistrationCsrfInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RegistrationCsrfInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RegistrationCsrfInterceptor = TestBed.inject(RegistrationCsrfInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
