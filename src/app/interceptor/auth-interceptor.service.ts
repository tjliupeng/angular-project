import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PopMessageComponent} from '../pop-message/pop-message.component';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector, private router: Router, public popMessage: MatDialog) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the auth header from the service
        const auth = this.injector.get(UserService);
        const authHeader = 'JWT ' + auth.getAuthorizationHeader();
        console.log( authHeader);
        // clone the request to add the new header
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});
        // pass on the cloned request instead of the original request
        // return next.handle(authReq);
        return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                  this.popMessage.open(PopMessageComponent, {
                    width : '300px',
                    height: '250px',
                    data : '您的操作已超时，请重新登录！ '
                });
                this.router.navigate(['/login']);
              }
            }
          });
    }
}
