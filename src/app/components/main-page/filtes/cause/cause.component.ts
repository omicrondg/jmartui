import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CauseService} from './cause.service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CauseComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _causeService: CauseService) { }

  ngOnInit() {
    this._causeService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
