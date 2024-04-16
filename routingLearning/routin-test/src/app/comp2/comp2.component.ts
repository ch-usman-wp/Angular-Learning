import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.sass'
})
export class Comp2Component {
  getData(){
    console.log(localStorage.getItem("userid"));
    console.log(localStorage.getItem("Empid"));

  }
  deletaData(){
    localStorage.removeItem('userid')
  }
  deletaall(){}
}
