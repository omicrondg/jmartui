import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../components/account/login/login.service';
import {EventsService} from '../../services/events.service';
import {ActivatedRoute} from '@angular/router';
import {AccountModel} from '../../components/account/login/Account';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  token: string;
  isAuthorized: boolean;
  account: AccountModel;

  constructor(private _loginService: LoginService,
              private _eventsService: EventsService,
              private route: ActivatedRoute,
              private _accountService: AccountService) {
  }

  ngOnInit() {
    this.token = this._loginService.getToken();
    if (this.token) {
      this.isAuthorized = true;
      this.account = this._accountService.getAccount();
    }
    this._eventsService.listen('isLogin').subscribe((val) => {
      if (val && val.data) {
        this.isAuthorized = true;
        this.account = this._accountService.getAccount();
      } else {
        this.isAuthorized = false;
      }
    });
  }

  get isHomePage() {

    let currentRoute = this.route.root;
    while (currentRoute.children[0] !== undefined) {
      currentRoute = currentRoute.children[0];
    }
    if (currentRoute.snapshot.data.name && currentRoute.snapshot.data.name === 'MainPage') {
      return true;
    }
    return false;

  }

}
