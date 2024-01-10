import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('URL of the request ', req.urlWithParams);
    const start = Date.now();
    return next.handle(req).pipe(
      tap((response) => {
        console.log(` Request duration :   ${Date.now() - start} ms`);
      })
    );
  }
}
