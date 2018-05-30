import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ScholarshipsService} from './scholarships.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScholarshipsComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _scholarshipsService: ScholarshipsService) { }

  ngOnInit() {
    this._scholarshipsService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }


}
