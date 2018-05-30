import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GenderService} from './gender.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenderComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _genderService: GenderService) {
  }

  ngOnInit() {
    this._genderService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
