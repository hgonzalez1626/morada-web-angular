import { TestBed } from '@angular/core/testing';

import { MoradaApiService } from './morada-api.service';

describe('MoradaApiService', () => {
  let service: MoradaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
