import {Component, OnInit} from '@angular/core';
import {AccountModel} from '../login/Account';
import {AccountService} from '../../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile: AccountModel;

  constructor(private _accountService: AccountService) {
  }

  ngOnInit() {
    this.userProfile = this._accountService.getAccount();
    console.log( this.userProfile );
  }

}
