import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user.model';
// import { environment } from '../../environments/environment';

// const backend_server = environment.backend_server;

@Injectable()
export class UserService {
  public isLogin = false;

  constructor(private http: HttpClient) {
  }

  userAuthentication(username: string, password: string): Observable<any> {
  //  console.log('backend server is ' + backend_server);
    const data = {
      'username': username,
      'password': password
    };
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post<any>('/auth', data, { headers : reqHeader} );
  }

  getAuthorizationHeader() {
    const token = localStorage.getItem('userToken');
    if (token) {
        return token;
    }else {
        return '';
    }
  }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    };

    const reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.http.post('/User/Register', body, { headers : reqHeader });
  }
}
