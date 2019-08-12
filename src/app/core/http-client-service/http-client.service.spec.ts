import { TestBed } from '@angular/core/testing';
import { ConfigsService } from './configs/configs.service';
import { HttpClientService } from './http-client.service';
import { ConfigParams } from './config-params/config-params.service';
import { HttpClientModule } from '@angular/common/http';
describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports: [HttpClientModule],
      providers: [ConfigsService]});
  });

  it('should be created', () => {
    const service: HttpClientService = TestBed.get(HttpClientService);
    expect(service).toBeTruthy();
  });
});
