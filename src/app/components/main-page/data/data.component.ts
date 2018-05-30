import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Program} from '../../../services/program';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataComponent implements OnInit {

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
