import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FrequencyService} from './frequency.service';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrequencyComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _frequencyService: FrequencyService) {
  }

  ngOnInit() {
    this._frequencyService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
