import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-localstorage';
import {AccountModel} from '../components/account/login/Account';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient,
              private _storageService: LocalStorageService) {
  }

  getUserAccount(): Observable<any> {
    return this.http.get<AccountModel>(environment.server_api + 'api/users').map((res) => res);
  }

  setAccount(accoutn: AccountModel) {
    this._storageService.set('account', JSON.stringify(accoutn));
  }

  getAccount(): AccountModel {
    const account = this._storageService.get('account');
    return JSON.parse(account);
  }

  saveAccount(account: any): Observable<any> {
    return this.http.put(environment.server_api + 'api/users', account);
  }

  getUserInfo(): Observable<any> {
    return this.http.get('/assets/files/userProfile');
  }

}
