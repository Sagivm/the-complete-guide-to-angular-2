import { Component, ViewChild,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TD-Form';
  @ViewChild('f') form: NgForm|undefined;
  form_data: {
    email: string,
    subscribe: string,
    password: string
  }={
      
    email: "",
    subscribe: "",
    password: ""
  };
  submitted: boolean = false;
  constructor(){
  }
  ngOnInit(): void {
  }
  onSubmit(){
    // this.form_data= this.form.value()
    console.log(this.form);
    this.submitted = true;

  }

}
