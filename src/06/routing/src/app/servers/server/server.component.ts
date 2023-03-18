import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number
  server: {id: number, name: string, status: string}
  paramsSubscribtion: Subscription = new Subscription();
  
  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.serverId = 0
      this.server = {id: 0, name: 'null', status: "null"};
  }

  ngOnInit() {
    this.serverId = Number.parseInt(this.route.snapshot.params["id"])
    this.paramsSubscribtion = this.route.params.subscribe((params) => {
      this.serverId = Number.parseInt(params['id'])
      this.server = (this.serversService.getServer(this.serverId))
    })
    this.server = (this.serversService.getServer(this.serverId) as {id: number, name: string, status: string});
  }

  onEditServer(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve' })

  }


}
