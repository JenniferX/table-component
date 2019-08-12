import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import * as TableData from './mockup-api/sample_data.json';
import * as Submit from './mockup-api/submit.json';
@Injectable()

export class MockupBackendInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request, next: HttpHandler): Observable < HttpEvent < any >> {
        return of(null).pipe(() => {
            if (request.url.endsWith('mockup-api/table-data') && request.method === 'GET') {
                return of(new HttpResponse({status: 200, body: TableData['default']}));
            } else if (request.url.endsWith('api/submit') && request.method === 'POST') {
                return of(new HttpResponse({status: 200, body: Submit['default']}));
            }
        }, delay(500));
    }
}
export const MockBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MockupBackendInterceptor,
    multi: true
};
