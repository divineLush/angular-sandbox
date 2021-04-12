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
  }
}
