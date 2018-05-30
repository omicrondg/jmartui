import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Program} from '../../../services/program';

@Component({
  selector: 'app-detail-accordion',
  templateUrl: './detail-accordion.component.html',
  styleUrls: ['./detail-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailAccordionComponent implements OnInit {

  oneAtATime = true;

  @Input() dataList: Program;

  constructor() {
  }

  ngOnInit() {
  }

}
