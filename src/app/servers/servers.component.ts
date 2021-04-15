import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  isServerCreated: boolean = false;
  userName: string = '';
  serverName: string = 'default';
  servers = ['Testserver', 'Testserver 2'];
  isDetailsVisible: boolean = false;
  detailsLog: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  onResetUserName() {
    this.userName = '';
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }

  onToggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.detailsLog.push(this.isDetailsVisible);
  }
}
