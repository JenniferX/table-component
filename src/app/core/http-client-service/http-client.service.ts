import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ConfigParams } from './config-params/config-params.service';
import { ConfigsService } from './configs/configs.service';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private webConfig: ConfigsService,
  ) { }

  getServiceRequest(option: string) {
    return this.webConfig.getData(ConfigParams[option]).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }

  postServiceRequest(option: string, params) {
    return this.webConfig.postData(ConfigParams[option], params).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }
}
