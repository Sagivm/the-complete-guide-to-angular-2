import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  
  allowNewServers = false;
  serverCreationStatus: string = 'no one created';
  serverName: string ="Test Server";
  userName: string = "";
  serverCreated: boolean = false;
  servers = ["Test Server 1", "Test Server 2"]
  timestamps: Date[] = []
  displayToggle = false;


  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    },2000)
  }

  onCreateNewServer() {
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUserName(event: any) {
    this.userName = "";
  }


  onDisplayPass(event:any) {
    this.displayToggle=!this.displayToggle;
    this.timestamps.push(new Date());
  }
}

