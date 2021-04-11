import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created';
    this.allowNewServer = false;
  }
}
