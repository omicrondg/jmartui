import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AgeGroupService} from './age-group.service';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgeGroupComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();


  constructor(private _ageGroupService: AgeGroupService) { }

  ngOnInit() {
    this._ageGroupService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }


}
