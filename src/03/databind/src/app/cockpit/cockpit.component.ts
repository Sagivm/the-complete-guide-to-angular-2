import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated  = new EventEmitter<{name: string, content:string}>();
  @Output() bpCreated = new EventEmitter<{name:string, content:string}>();

  onAddServer(srvNameInput: HTMLInputElement, srvContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: srvNameInput.value, 
      content: srvContentInput.value
    });
  }

  onAddBlueprint(srvNameInput: HTMLInputElement, srvContentInput: HTMLInputElement) {
   this.bpCreated.emit({
      name: srvNameInput.value, 
      content: srvContentInput.value
    });
  }
}
