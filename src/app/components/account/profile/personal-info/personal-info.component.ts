import {Component, Input, OnInit} from '@angular/core';
import {MoreInfoModel} from '../../login/MoreInfo';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: [
    './personal-info.component.scss',
    '../profile.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Input() personalInfo: MoreInfoModel;

  constructor() { }

  ngOnInit() {
  }

}
