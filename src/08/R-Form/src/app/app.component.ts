import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'R-Form';
  projectForm: FormGroup;
  projectStatuses: string[]= ["Stable","Critical","Finished"]

  constructor(){
    this.projectForm = new FormGroup({
      "projectName": new FormControl(null,[Validators.required,this.projectNameValidator],),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "projectStatus": new FormControl()
    })
  }
  
  projectNameValidator(control: FormControl) : {[s: string]: boolean}|null {

    if (control.value == "Test"){
      console.log("fucl")
      return {'nameisForbidden': true}
    }
    return null
  }

  onSubmit(){

  }
}
