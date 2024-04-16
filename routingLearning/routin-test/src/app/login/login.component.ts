import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  login(userid:any,password:any){
    if(userid=='usman' && password=='123'){
      sessionStorage.setItem('isloggedIn','true');
    }
    else{
      sessionStorage.setItem('isloggedIn','false')
    }
  }
}
