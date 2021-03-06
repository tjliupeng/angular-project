import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

// const backend_server = environment.backend_server;

@Injectable()
export class DicomSearchService {

  public dicomSearchResults: Array<any> = [];
  public total = 0;
  public currenttotal = 0;
  public tagstr = '';
  public hospitalstr = '';
  public patientnamestr = '';
  public scrollid = '';

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
    } else {
      if (this.tagstr.trim()) {
        data.tags = this.tagstr.trim();
      }

      if (this.hospitalstr.trim()) {
        data.InstitutionName = this.hospitalstr.trim();
      }

      if (this.patientnamestr.trim()) {
        data.PatientName = this.patientnamestr.trim();
      }
    }

    return this.http.post<any>('/dicom/lists', data)
      .do(
        res => {
          const res_json = JSON.parse(res);
          this.total = +res_json['total'];
          this.currenttotal += +res_json['current'];
          this.scrollid = res_json['scrollid'];
          const result_arr = JSON.parse(res_json['result']);
          console.log('res result', result_arr);
          result_arr.map(i => {
            const newobj: {
              [k: string]: any
            } = {};
            newobj.id = i._id;
            for (const key in i._source) {
              if (i._source.hasOwnProperty(key)) {
                newobj[key] = i._source[key];
              }
            }
            this.dicomSearchResults.push(newobj);
          });
        }
      );
  }
}
