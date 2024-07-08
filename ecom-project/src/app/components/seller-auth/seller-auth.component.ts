import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.sass'
})
export class SellerAuthComponent {

  showLogin = false;

  authError:string = '';

  constructor(private seller: SellerService, private router: Router){}

      ngOnInit():void{
      this.seller.reloadSeller()
      }

  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }
  logIn(data:SignUp):void{
    this.authError = " ";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) =>{
      if (isError) {
        this.authError = "Email or password wrong"
      }
    })
  }
  signIn(data:SignUp){}
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
}
