import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {count, Observable, tap} from 'rxjs';
import {AppLoadingService} from "./app-loading.service";

@Injectable()
export class AppLoadingInterceptor implements HttpInterceptor {

  count = 0;

  constructor( private readonly loading: AppLoadingService ) {}

  intercept(request: HttpRequest<unknown>,
            next: HttpHandler): Observable<HttpEvent<unknown>> {
      // this.count++;
    this.loading.increment();
    return next.handle( request ).pipe(
      tap ( {
        complete: () => this.loading.decrement(),
        error: (err) => this.loading.decrement()
      })
    );
  }
}
