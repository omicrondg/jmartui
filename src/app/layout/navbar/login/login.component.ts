import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginModalService} from '../../../components/login/login-modal.service';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CrateAccountModalService} from '../../../components/crateAccount/crateAccount-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  modalRef: NgbModalRef;

  constructor(private _loginModalService: LoginModalService,
              private _crateAccountModalService: CrateAccountModalService) {
  }

  ngOnInit() {
  }

  login() {
    this._loginModalService.open();
  }

  join() {
    this._crateAccountModalService.open();
  }

}
