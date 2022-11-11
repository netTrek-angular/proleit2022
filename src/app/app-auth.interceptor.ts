import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>,
            next: HttpHandler): Observable<HttpEvent<unknown>> {

    const cloneReg = request.clone(
      {
        headers: request.headers.set( 'Authorization', 'Basic' + btoa('Saban'))
      }
    )


    return next.handle( request.url.includes('users') ? cloneReg : request );
  }
}
