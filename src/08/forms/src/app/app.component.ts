import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm|undefined;
  defaultQuestion: string = 'pet'
  answer: string = ""
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  submitted: boolean = false

//   onSubmit(form: NgForm){
//     console.log(form)
//   }
// }

  onSubmit(){
    console.log(this.signUpForm)
    this.submitted = true
  }

}
