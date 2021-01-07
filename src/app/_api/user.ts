import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class UserService {

  private URL_LOGIN = 'api/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(userID: string, passID: string): Observable<any> {
    console.log('service');
    return this.http.post<{userID: string, passID: string}>(
      this.URL_LOGIN,
      { userID, passID },
      this.httpOptions).pipe(
        // RxJS 的 tap() 操作符来实现，该操作符会查看 Observable 中的值，使用那些值做一些事情，并且把它们传出来。 这种 tap() 回调不会改变这些值本身。
        tap((next) => {
          console.log('next');
          console.log(next);
        }),
        catchError(this.handleError('loginError', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}

