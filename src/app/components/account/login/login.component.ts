import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });

    this.loginForm.setValue({
      username: '',
      password: ''
    });
  }

  onSubmit($event) {
    const values = this.loginForm.value;
    this.loginService.login(values).subscribe((res) => {
      this.loginService.setToken(res.access_token);
    });
  }
}
