import { Component } from '@angular/core';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  sellerName: any;
constructor(private router: Router){}
menuType: string = 'default';

  ngOnInit(){
    this.router.events.subscribe((val:any) =>{
    if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = "seller";
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.firstName;
          }
        }else{
          this.menuType = "default"
        }
      }
    })
  }
  logout()
{
  localStorage.removeItem("seller");
  this.router.navigate(['/']);
}}
