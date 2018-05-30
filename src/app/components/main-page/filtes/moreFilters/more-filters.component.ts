import {Component, EventEmitter, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FilterDataItem} from '../FilterDataItem';


@Component({
  selector: 'app-join',
  templateUrl: './more-filters.component.html',
  styleUrls: ['./more-filters.css']
})
export class MoreFiltersComponent {

  filterDataState: FilterDataItem[] = [];
  @Output() onSet: EventEmitter<FilterDataItem[]> = new EventEmitter();

  constructor(private modalService: NgbModal) {
  }


  onChange(event: string, fieldName: string) {
    FilterDataItem.fillContainer(this.filterDataState, fieldName, event);
  }

  open(content) {
    this.modalService.open(content);
  }


  setChanges() {
    this.onSet.emit(this.filterDataState);
  }


}
