import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {LookingService} from './looking.service';

@Component({
  selector: 'app-looking',
  templateUrl: './looking.component.html',
  styleUrls: ['./looking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LookingComponent implements OnInit {

  value: any
  dropdownList: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  constructor(private _causeService: LookingService) { }

  ngOnInit() {
    this._causeService.getList().subscribe((res) => {
      this.dropdownList = res;
    });
  }

  setChanges() {
    this.onChange.emit(this.value);
  }

}
