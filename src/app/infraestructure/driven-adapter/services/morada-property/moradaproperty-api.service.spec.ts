import { TestBed } from '@angular/core/testing';

import { MoradapropertyApiService } from './moradaproperty-api.service';

describe('MoradapropertyApiService', () => {
  let service: MoradapropertyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradapropertyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
