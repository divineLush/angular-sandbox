import { Component, OnInit } from '@angular/core';

enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
  // styles: [`
  //   .server {
  //     background: #34495e;
  //   }`
  // ],
})
export class ServerComponent implements OnInit {
  serverID: number = 1;
  private _serverStatus: ServerStatus = ServerStatus.OFFLINE;

  constructor() {
    this._serverStatus = Math.random() > 0.5 ? ServerStatus.ONLINE : ServerStatus.OFFLINE;
  }

  ngOnInit(): void {
  }

  get serverClass() {
    return {
      _online: this._serverStatus === ServerStatus.ONLINE,
      _offline: this._serverStatus === ServerStatus.OFFLINE,
    }
  }

  getServerStatus() {
    return this._serverStatus;
  }

  getColor() {
    return this._serverStatus === ServerStatus.ONLINE ? 'green' : 'red';
  }
}
