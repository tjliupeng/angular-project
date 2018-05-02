import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the auth header from the service
        const auth = this.injector.get(UserService);
        const authHeader = 'JWT ' + auth.getAuthorizationHeader();
        console.log( authHeader);
        // clone the request to add the new header
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});
        // pass on the cloned request instead of the original request
        return next.handle(authReq);
    }
}
