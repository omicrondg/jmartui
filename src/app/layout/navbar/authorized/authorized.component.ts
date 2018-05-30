import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../components/account/login/login.service';
import {EventsService} from '../../../services/events.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  @Input() userName: string;

  constructor(private _loginService: LoginService,
              private _eventsService: EventsService,
              private _rourer: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this._loginService.logout().subscribe(
      data => {
        this._eventsService.emit({name: 'isLogin', data: false});
        this._loginService.clearStorage();
        this._rourer.navigate(['']);
      },
      error => {
      }
    );
  }

  profile() {
    this._rourer.navigate(['profile']);
  }

}
