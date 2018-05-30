import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LocationService} from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _locationService: LocationService) { }

  ngOnInit() {
    this._locationService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
