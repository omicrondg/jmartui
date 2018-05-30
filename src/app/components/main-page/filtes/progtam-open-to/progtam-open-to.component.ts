import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProgramOpenToService} from './program-open-to.service';

@Component({
  selector: 'app-progtam-open-to',
  templateUrl: './progtam-open-to.component.html',
  styleUrls: ['./progtam-open-to.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgtamOpenToComponent implements OnInit {

  value: any;
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _programOpenToService: ProgramOpenToService) {
  }

  ngOnInit() {
    this._programOpenToService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
