import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TimeFrameService} from './time-frame.service';

@Component({
  selector: 'app-time-frame',
  templateUrl: './time-frame.component.html',
  styleUrls: ['./time-frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimeFrameComponent implements OnInit {

  value: any;
  values: any;
  dropdownList: any;
  isSelect = false;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _timeFrameService: TimeFrameService) { }

  ngOnInit() {
    this._timeFrameService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

  select() {
    if (!this.isSelect && this.values.indexOf('all') > -1) {
      this.isSelect = true;
      this.values = this.dropdownList;
    } else if (this.isSelect && this.values.indexOf('all') > -1) {
      this.isSelect = false;
      this.values = [];
    }
  }

}
