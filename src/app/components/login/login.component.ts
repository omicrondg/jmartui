import {Component, AfterViewInit, Renderer, ElementRef, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../account/login/login.service';
import {EventsService} from '../../services/events.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login.component.html',
  styleUrls: [
    'login.css'
  ]
})
export class LoginModalComponent implements AfterViewInit, OnInit {

  username: string;
  credentials: any;
  loginForm: FormGroup;
  loginSuccess: boolean;
  showSpinner: boolean;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer,
              public activeModal: NgbActiveModal,
              private _fb: FormBuilder,
              private _loginService: LoginService,
              private _eventsService: EventsService,
              private _accountService: AccountService) {
    this.credentials = {};
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#name'), 'focus', []);

  }

  ngOnInit() {
    this.showSpinner = false;
    this.loginSuccess = false;
    this.loginForm = this._fb.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });

    this.loginForm.setValue({
      username: '',
      password: ''
    });
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

  onSubmit($event) {
    const values = this.loginForm.value;
    this._loginService.login(values).subscribe((res) => {
      this._loginService.setToken(res.access_token);
      this._accountService.getUserAccount().subscribe((res) => {
        this._accountService.setAccount(res);
        this._eventsService.emit({ name: 'isLogin', data: true });
      });
      this.activeModal.dismiss('cancel');
    });
  }

}
