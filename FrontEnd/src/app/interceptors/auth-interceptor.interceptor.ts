import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

 
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let cPerson = JSON.parse(localStorage.getItem('cPerson') || "{}");

    if (cPerson && cPerson.token) {
      request = request.clone({
          setHeaders: { 
              "x-access-token": `${cPerson.token}`
          }
      });
  }
    
    return next.handle(request);
  }
}
