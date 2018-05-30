import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CrateAccountService {

    constructor(private _http: HttpClient) {
    }

}
