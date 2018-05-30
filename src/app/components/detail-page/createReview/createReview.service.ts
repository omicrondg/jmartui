import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment.prod';

@Injectable()
export class CreateReviewService {

  constructor(private _http: HttpClient) {
  }


  createReview(data: any): Observable<any> {
    return this._http.post(environment.server_api + 'api/reviews', data);
  }


}
