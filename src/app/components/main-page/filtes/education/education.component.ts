import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EducationService} from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  value: any
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private  _educationService: EducationService) {
  }

  ngOnInit() {
    this._educationService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
