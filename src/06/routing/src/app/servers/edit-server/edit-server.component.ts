import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit : boolean = false

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { 
    this.server = {id: 0, name: 'null', status: "null"};
  }

  ngOnInit() {
    this.route.queryParams.subscribe()
    this.route.fragment.subscribe()
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe( (queryParams) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
