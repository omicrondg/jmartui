import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProgramsService} from '../../../../services/programs.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-want-do',
  templateUrl: './want-do.component.html',
  styleUrls: ['./want-do.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WantDoComponent implements OnInit {

  value: any;
  values: any;
  dropdownList: any;
  isSelect = false;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _programsService: ProgramsService) {
  }

  ngOnInit() {

    this._programsService.getTagList().subscribe((res) => {
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
