import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {OccupationService} from './occupation.service';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OccupationComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _occupationService: OccupationService) { }

  ngOnInit() {
    this._occupationService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
