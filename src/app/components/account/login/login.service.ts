import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment.prod';
import {LocalStorageService} from 'ngx-localstorage';
import {AuthorizationModel} from './AuthorizationModel';
import {AccountModel} from './Account';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private _storageService: LocalStorageService) {
  }

  login(credentials): Observable<AuthorizationModel> {
    const data = 'username=' + encodeURIComponent(credentials.username) + '&password=' +
      encodeURIComponent(credentials.password) + '&grant_type=password&scope=openide';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<AuthorizationModel>(environment.server_api + 'api/connect/token', data, {
      headers: headers
    }).map((res) => res);
  }

  setToken(token: string) {
    this._storageService.set('authenticationToken', token);
  }

  getToken() {
    return this._storageService.get('authenticationToken');
  }

  clearStorage() {
    this._storageService.remove('authenticationToken');
    this._storageService.remove('account');
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(environment.server_api + 'api/connect/logout', null , {headers: headers});
  }


}
