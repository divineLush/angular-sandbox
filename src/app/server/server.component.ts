import { Component, OnInit } from '@angular/core';

enum ServerStatus {
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

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus () {
    return this._serverStatus;
  }
}
