import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpClient
} from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 通过拦截器拦截 api/login 请求
    if ( req.url === 'api/login' ) {
      const data = require('../mock/login.json');
      // 自己提供数据
      return of(new HttpResponse({
        status: 200,
        url: req.url,
        body: data
      }));
    } else {
      return next.handle(req);
    }
  }
}
