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
              private _router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this._loginService.logout().subscribe(
      data => {
        this._eventsService.emit({name: 'isLogin', data: false});
        this._loginService.clearStorage();
        this._router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );
  }

  profile() {
    this._router.navigate(['profile']);
  }

}
