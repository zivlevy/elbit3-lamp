import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SocketService {

  socketObservable: BehaviorSubject < null | number> = new BehaviorSubject(null);
  socket = null;

  constructor() {
    this.socket = io('http://130.211.153.28:3000');
    // this.socket = io('http://localhost:9000');
    this.socket.on('lamp', (data) => {
      this.socketObservable.next(parseInt(data));
    })
  }

  getLampData() {
    return this.socketObservable.asObservable();
  }

  setLampData(data) {
    this.socket.emit('lamp', data);
  }

}
