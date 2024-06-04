import { Component } from '@angular/core';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
constructor(private router: Router){}
ngOnInit(){
  this.router.events.subscribe((val:any) =>{
  if (val.url) {
    if (localStorage.getItem('seller') && val.url.includes()) {
      console.log(val.url)
    }
  }
  })
}
}
