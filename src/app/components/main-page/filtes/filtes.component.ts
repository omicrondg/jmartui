import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FilterDataItem} from './FilterDataItem';

@Component({
  selector: 'app-filtes',
  templateUrl: './filtes.component.html',
  styleUrls: ['./filtes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiltesComponent implements OnInit {

  filterDataState: FilterDataItem[] = [];

  @Output() onChangeFilters: EventEmitter<FilterDataItem[]> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange(event: string, fieldName: string) {
    FilterDataItem.fillContainer(this.filterDataState, fieldName, event);
    this.onChangeFilters.emit(this.filterDataState);
  }

  onAddMore(events: FilterDataItem[]) {
    events.map(item => {
      FilterDataItem.fillContainer(this.filterDataState, item.fieldName, item.value);
    });
    this.onChangeFilters.emit(this.filterDataState);
  }
}
