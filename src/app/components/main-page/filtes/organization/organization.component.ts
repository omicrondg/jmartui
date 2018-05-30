import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {OrganizationService} from './organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationComponent implements OnInit {

  value: any;
  values: any;
  dropdownList: any;
  isSelect = false;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _organizationService: OrganizationService) { }

  ngOnInit() {
    this._organizationService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
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

}
