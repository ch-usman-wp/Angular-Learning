import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;

  isLoading = false;
  error: string;

  constructor(private authservices: AuthService){}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading =true;
if (this.isLoginMode) {
  authObs = this.authservices.login(email, password)
}else{
 authObs=  this.authservices.signup(email, password)
}
authObs.subscribe(
  resData => {
  console.log(resData);
  this.isLoading =false;
},errorMessage =>{
  console.log(errorMessage);
  this.error = errorMessage;
  this.isLoading =false;
  // this.error = 'Email is already exist';

}
);
    form.reset();
  }
}
