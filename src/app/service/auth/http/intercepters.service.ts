import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptersService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'admin';
    let password = 'admin';
    let basicAuthentication = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: ({
        Authorization: basicAuthentication
      })
    });

    return next.handle(request);
  }
}
