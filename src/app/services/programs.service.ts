import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment.prod';
import {Program} from './program';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProgramsService {

  constructor(private http: HttpClient,
              private _storageService: LocalStorageService) {
  }


  getAllProgram(): Observable<Array<Program>> {
    return this.http.get<Array<Program>>(environment.server_api + 'api/programs/');
  }

  getUserProgram(): Observable<any> {

    return this.http.get(environment.server_api + 'api/programs/my');
  }

  getProgramById(id: number): Observable<Program> {
    return this.http.get<Program>(environment.server_api + 'api/programs/' + id);

  }

  saveImg(file: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content': 'multipart/form-data'
    });
    return this.http.post(environment.server_api + 'api/pictures', file, {headers: headers});

  }

  getProgramsByTag(tag: string): Observable<Array<Program>> {
    return this.http.get<Array<Program>>(environment.server_api + 'api/programs/tag/' + tag);
  }

  getTagList(): Observable<Array<Program>> {
    return this.http.get<Array<Program>>(environment.server_api + 'api/tags/');
  }
}
