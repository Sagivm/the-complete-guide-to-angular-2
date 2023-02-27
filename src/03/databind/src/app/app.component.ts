import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Server',
    content:"test server"
  }]

  onAddServerAdded(srvData:{
    name:string,
    content:string
  }) {
    this.serverElements.push({
      type: 'server',
      name: srvData.name,
      content: srvData.content
    });
    
  }

  onAddBlueprintAdded(bpData:{
    name:string,
    content:string
  }) {
    this.serverElements.push({
      type: 'Blueprint',
      name: bpData.name,
      content: bpData.content
    });
    
  }
}