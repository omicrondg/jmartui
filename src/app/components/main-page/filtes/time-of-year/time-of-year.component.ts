import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TimeOfYearService} from './time-of-year.service';

@Component({
  selector: 'app-time-of-year',
  templateUrl: './time-of-year.component.html',
  styleUrls: ['./time-of-year.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimeOfYearComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _timeOfYearService: TimeOfYearService) {
  }

  ngOnInit() {
    this._timeOfYearService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }


}
