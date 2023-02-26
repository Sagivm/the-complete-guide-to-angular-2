import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent implements OnInit {
  title = 'recipe';
  context: string;

  constructor() {}

  ngOnInit() {
    this.context = null;
  }

  onNavItemSelected(option: string){  
    console.log(option);
    this.context = option;
  }
}
