import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
 })
export class AuthGuard implements HttpInterceptor {

 
     intercept(req: HttpRequest<any>, next: HttpHandler) {
      const startTime = Date.now();
      let status: string;

        console.log("User id in interceptor::: "+localStorage.getItem("userId"));
        
        return next.handle(req).pipe(
          tap(
            event => {
              status = '';
              if (event instanceof HttpResponse) {
                status = 'succeeded';
              }
            },
            error => status = 'failed'
          ),
          finalize(() => {
            const elapsedTime = Date.now() - startTime;
            const message = req.method + " " + req.urlWithParams +" "+ status 
            + " in " + elapsedTime + "ms";
            
            this.logDetails(message);
          })
      );
      }

      private logDetails(msg: string) {
        console.log(msg);
      }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthGuard, multi: true },
  ];
