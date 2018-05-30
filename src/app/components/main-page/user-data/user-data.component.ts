import {Component, Input, OnInit} from '@angular/core';
import {Program} from '../../../services/program';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() data: Program;

  constructor(private _rourer: Router) {
  }

  ngOnInit() {
  }

  showDetail(id) {
    this._rourer.navigate(['/detail/' + id]);
  }

  getImage(id) {
    return environment.server_api + 'api/pictures/' + id;
  }
}
