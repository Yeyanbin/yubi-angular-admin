import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpClient
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { login, works } from '../mock/user';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req);
    console.log(next);
    // 通过拦截器拦截 api/login 请求
    if ( req.url === 'api/login' ) {

      // 自己提供数据
      return of(new HttpResponse({
        status: 200,
        url: req.url,
        body: login
      }));
    } else if ( req.url === 'api/works' ) {
      return of(new HttpResponse({
        status: 200,
        url: req.url,
        body: works,
      }));
    } else {
      return next.handle(req);
    }
  }
}
