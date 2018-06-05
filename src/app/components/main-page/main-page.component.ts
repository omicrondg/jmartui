import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilterDataItem} from './filtes/FilterDataItem';
import {MainPageRequestResource} from './MainPageRequestResource';
import {MainPageService} from './main-page.service';
import {ProgramsService} from '../../services/programs.service';
import {Program} from '../../services/program';
import {LoginService} from '../account/login/login.service';
import {EventsService} from '../../services/events.service';
import {AccountModel} from '../account/login/Account';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  token: string;
  isLogin: boolean;
  data: MainPageRequestResource;

  programs: Array<Program>;
  usersPrograms: Array<Program>;
  account: AccountModel;

  constructor(private _programsService: ProgramsService,
              private _loginService: LoginService,
              private _eventsService: EventsService,
              private _accountService: AccountService) {
                _eventsService.listen("isLogin").subscribe(data=>{
                 this.isLogin = data.data as boolean;
                });
  }

  ngOnInit() {
    this.token = this._loginService.getToken();

    if (this.token) {
      this.getUserProgram();
    }
    this.getAllProgram();
    this._eventsService.listen('isLogin').subscribe((val) => {
      if (val && val.data) {
        this.getUserProgram();
      } else {
        this.usersPrograms = null;
      }
    });
  }

  getAllProgram() {
    this._programsService.getAllProgram().subscribe((programs) => {
      this.programs = programs;
    });
  }

  getUserProgram() {
    this.account = this._accountService.getAccount();
    this._programsService.getUserProgram().subscribe((programs) => {
      this.usersPrograms = programs;
    });
  }

  onChangeFilters(event: FilterDataItem[]) {
    this.data = {
      filters: event,
      offset: 1
    };
    if (event[0]) {
      this.getData(event[0].value);
    } else {
      this.getAllProgram();
    }
  }

  getData(data) {
    this._programsService.getProgramsByTag(data).subscribe((res) => {
      this.programs = res;
    });
  }

}
