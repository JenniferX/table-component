import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ConfigsService} from './configs.service';
import {HttpTestingController} from '@angular/common/http/testing';

describe('ConfigsService', () => {

  let service: ConfigsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [HttpClientModule],
      providers: [ConfigsService, HttpTestingController]});
    service = TestBed.get(ConfigsService);
    httpMock = TestBed.get(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
