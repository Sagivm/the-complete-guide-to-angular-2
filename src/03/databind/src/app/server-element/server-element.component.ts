import { Component,Input,OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{
  // element: {type: string, name:string, content:string};
  @Input('srvElement') element: any = {};
 
  constructor(){
    console.log('constructor called');	
  }
  ngOnInit(){
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

}
