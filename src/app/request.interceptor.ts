import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor: Intercepting request', request);
    const newRequest = request.clone({
      headers: new HttpHeaders({'Custom-Header': '12345678wertyuiodfghjk'})
    });
    return next.handle(newRequest);
  }
}
