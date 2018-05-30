import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {WhereService} from './where.service';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhereComponent implements OnInit {

  value: any;
  values: any;
  dropdownList: any;
  isSelect = false;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _whereService: WhereService) { }

  ngOnInit() {
    this._whereService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
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

  setChanges() {
    this.onChange.emit(this.value);
  }

}
