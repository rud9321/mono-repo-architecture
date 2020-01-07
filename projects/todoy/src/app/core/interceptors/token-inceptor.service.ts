import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfing = {
      'Content-Type': '',
      'Accept': 'application/json'
    };
    headersConfing['Authorize'] = 'HJGJ87687JHGJHG76JHGJH7868HGJ';
    const request = req.clone({ setHeaders: headersConfing });
    return next.handle(request);
  }

}
