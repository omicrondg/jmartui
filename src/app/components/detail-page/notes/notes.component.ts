import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {

  @Input() notes: any;

  constructor() { }

  ngOnInit() {
  }

}
