import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventsService {

  private _emitters: Array<{ name: string, emitter: EventEmitter<any> }> = [];

  constructor() {
  }

  emit(event: { name: string, data: any }): void {

    for (const e of this._emitters) {
      if (e.name === event.name) {
        e.emitter.emit(event);
        return;
      }
    }

    const e = {name: event.name, emitter: new EventEmitter()};
    e.emitter.emit(event);
    this._emitters.push(e);
  }

  listen(name: string): EventEmitter<any> {

    for (const e of this._emitters) {
      if (e.name === name) {
        return e.emitter;
      }
    }

    const e = {name: name, emitter: new EventEmitter()};
    this._emitters.push(e);
    return e.emitter;
  }

}
