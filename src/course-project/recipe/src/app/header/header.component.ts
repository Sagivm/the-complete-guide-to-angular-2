import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() navContext = new EventEmitter<string>();
  
  constructor(){}

  onNavItemSelected(option: string){
    console.log(option);
    this.navContext.emit(option);
    
  }

}
