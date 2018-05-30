import {Component, AfterViewInit, Renderer, ElementRef, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginModalService} from '../login/login-modal.service';

@Component({
  selector: 'app-crate-account',
  templateUrl: './crateAccount.component.html',
  styleUrls: [
    'crateAccount.css'
  ]
})
export class CrateAccountComponent implements AfterViewInit, OnInit {

  username: string;
  credentials: any;
  joinForm: FormGroup;
  loginSuccess: boolean;
  showSpinner: boolean;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer,
              public activeModal: NgbActiveModal,
              private _fb: FormBuilder,
              private _loginModalService: LoginModalService) {
    this.credentials = {};
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#firstName'), 'focus', []);

  }

  ngOnInit() {
    this.showSpinner = false;
    this.loginSuccess = false;
    this.joinForm = this._fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });

    this.joinForm.setValue({
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

  onSubmit() {
    const values = this.joinForm.value;
  }

  login() {
    this.activeModal.dismiss('cancel');
    this._loginModalService.open();
  }
}
