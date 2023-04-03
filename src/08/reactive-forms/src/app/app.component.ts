import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup ;
  forbiddenUserNames: string[] =["Chris", "Anna"]
  constructor(){
    this.signUpForm = new FormGroup({
      "username": new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "gender": new FormControl(this.genders[0]),
      "hobbies": new FormArray([])
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signUpForm)
  }
  onAddHobby(){
    (<FormArray>this.signUpForm.get("hobbies")).push(new FormControl(
      null, Validators.required
    ))
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl) : {[s: string]: boolean}|null {
    if (this.forbiddenUserNames.indexOf(control.value)!=-1){
      return {'nameisForbidden': true}
    }
    return null
  }

}
