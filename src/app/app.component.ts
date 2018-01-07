import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lampData : number = 0;

  constructor(private socketService:SocketService) {
    socketService.getLampData().subscribe((data)=>{
      if (data!==null) this.lampData = data;
    })
  }

  setLampData(value){
    this.lampData=value;
    this.socketService.setLampData(this.lampData);
  }
}
