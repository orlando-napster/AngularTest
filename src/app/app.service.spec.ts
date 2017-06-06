import {TestBed, inject, ComponentFixtureAutoDetect} from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should return true', inject([AppService], (service: AppService) => {
    expect(service.sendTrue()).toEqual(true);
  }));
});
