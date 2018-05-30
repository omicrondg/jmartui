import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailPageService {

  constructor(private _http: HttpClient) { }

  getDetailInfo(): Observable<any> {
    return this._http.get('/assets/files/detailInfo');
  }

}
