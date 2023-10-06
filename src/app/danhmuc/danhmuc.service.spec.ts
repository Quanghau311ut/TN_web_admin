/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DanhmucService } from './danhmuc.service';

describe('Service: Danhmuc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DanhmucService]
    });
  });

  it('should ...', inject([DanhmucService], (service: DanhmucService) => {
    expect(service).toBeTruthy();
  }));
});
