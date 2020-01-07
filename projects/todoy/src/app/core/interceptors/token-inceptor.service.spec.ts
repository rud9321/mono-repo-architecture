import { TestBed } from '@angular/core/testing';

import { TokenInceptorService } from './token-inceptor.service';

describe('TokenInceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInceptorService = TestBed.get(TokenInceptorService);
    expect(service).toBeTruthy();
  });
});
