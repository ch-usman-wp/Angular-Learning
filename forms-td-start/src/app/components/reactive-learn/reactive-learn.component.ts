import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-learn',
  templateUrl: './reactive-learn.component.html',
  styleUrls: ['./reactive-learn.component.css']
})
export class ReactiveLearnComponent implements OnInit {
  userData:any
  forbiddenUserName = ['chris', 'anna']
  hobbyControls: any;
  constructor(private formBuilder: FormBuilder) { }

  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
   this.signupForm = new FormGroup({
    'userData':new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddinNames.bind(this)]), // Corrected method name

      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    })
   })
  }
  onSubmit(){
    console.log(this.signupForm)
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  
  forbiddinNames(control: FormControl):{[s: string]: boolean}{
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return{'nameIsForbidden': true};
    }
    return null
  }
}
