import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// intercepting all outgoing http requests and appening request headers with authorization token
export class BasicAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem(`username`) && sessionStorage.getItem(`basicauth`)) {
      request = request.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem(`basicauth`)
        }
      });
    }
    return next.handle(request);
  }
}
