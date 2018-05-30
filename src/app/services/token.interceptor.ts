import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {LocalStorageService} from 'ngx-localstorage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _storageService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authHeader = 'Bearer ' + this._storageService.get('authenticationToken');
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    return next.handle(authReq);
  }
}
