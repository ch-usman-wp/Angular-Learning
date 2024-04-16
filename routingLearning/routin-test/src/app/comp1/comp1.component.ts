import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.sass'
})
export class Comp1Component {
  setData(){
    localStorage.setItem("usman","12222")
  }
}
