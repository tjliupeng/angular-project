import { TestBed, inject } from '@angular/core/testing';

import { UrlInterceptorService } from './url-interceptor.service';

describe('UrlInterceptor.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlInterceptorService]
    });
  });

  it('should be created', inject([UrlInterceptorService], (service: UrlInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
