import {Component, Input, OnInit} from '@angular/core';
import {AccountModel} from '../../login/Account';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../../services/account.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss',
    '../profile.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() userProfile: AccountModel;
  useInfo: any;
  basicInfoForm: FormGroup;
  isReadMode = true;

  constructor(private _accountService: AccountService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getUser();
    this.basicInfoForm = this._fb.group({
      address: ['', Validators.compose([Validators.required])],
      birthDate: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNumber: ['', Validators.compose([Validators.required])],
    });
  }

  getUser() {
    this._accountService.getUserInfo().subscribe((res) => {
      this.useInfo = res;
      this.setDat();
    });
  }

  setDat() {
    this.basicInfoForm.setValue({
      address: this.useInfo.country + ',  ' + this.useInfo.city,
      birthDate: this.useInfo.birthDate,
      gender: this.useInfo.gender,
      email: this.useInfo.email,
      phoneNumber: this.useInfo.phoneNumber
    });
  }

  edit() {
    this.isReadMode = false;
  }

  save() {
    this.isReadMode = true;
  }

  cancel() {
    this.isReadMode = true;
  }


}
