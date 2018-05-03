import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

// const backend_server = environment.backend_server;

@Injectable()
export class DicomSearchService {

  public dicomSearchResults: Array<any>;
  public total = 0;
  public currenttotal = 0;
  public tagstr: string;
  public hospitalstr: string;
  public patientnamestr: string;
  public scrollid: string;

  constructor(private http: HttpClient) { }

  Search() {
    // const params = new HttpParams({
    //   fromObject: {
    //     'page': this.nextQueryPage.toString(),
    //     'jsonQuery': JSON.stringify({
    //       '$or': [
    //         {'algorithmName': {'$regex': this.queryStr, '$options': 'i'}},
    //         {'algorithmCode': {'$regex': this.queryStr, '$options': 'i'}},
    //         {'algorithmDescription': {'$regex': this.queryStr, '$options': 'i'}},
    //         {'tags': {'$regex': this.queryStr, '$options': 'i'}}
    //         ]
    //     })
    //   }
    // });
    const data: {
      [k: string]: any
    } = {};

    if (this.scrollid.trim()) {
      data.scrollid = this.scrollid.trim();
    }

    if (this.tagstr.trim()) {
      data.tags = this.tagstr.trim();
    }

    if (this.hospitalstr.trim()) {
      data.InstitutionName = this.hospitalstr.trim();
    }

    if (this.patientnamestr.trim()) {
      data.PatientName = this.patientnamestr.trim();
    }

    return this.http.post<any>('/lists', data)
      .do(
        res => {
          this.total = +res['total'];
          this.currenttotal += +res['current'];
          this.scrollid = res['scrollid'];
          res['result'].map(i => this.dicomSearchResults.push(i));
        }
      );
  }
}
