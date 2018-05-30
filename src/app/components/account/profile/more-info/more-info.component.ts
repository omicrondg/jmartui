import {Component, Input, OnInit} from '@angular/core';
import {MoreInfoModel} from '../../login/MoreInfo';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: [
    './more-info.component.scss',
    '../profile.component.scss']
})
export class MoreInfoComponent implements OnInit {

  @Input() personalInfo: MoreInfoModel;

  constructor() { }

  ngOnInit() {
  }

}
