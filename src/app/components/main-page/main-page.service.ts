import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {MainPageRequestResource} from './MainPageRequestResource';


@Injectable()
export class MainPageService {

  constructor(private _http: HttpClient) {
  }

  getData(data: MainPageRequestResource): Observable<any> {
    return this._http.get('/assets/files/dataList');
  }

}

