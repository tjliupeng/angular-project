import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AppSettings } from './appsettings';

@Injectable()
export class AppsettingsService {

  constructor(private http: Http) { }

  getSettings(): Observable<AppSettings> {
    return this.http.get('./assets/appsettings.json')
      .map((data) => data.json())
      .catch(err => {
        throw new Error('error in source. Details: ' + err);
      });
//      .catch(this.handleErrors);
  }

//  private handleErrors(error: any): Observable<any> {
//    console.error('An error occured', error);
//    return Observable.throw(error.message||error);
//  }
}
