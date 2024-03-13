import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'directive-use';
  numbers = [1,2,3,4,5,6];
  oddNumber = [1,3,5]
  evenNumber = [2,4,6]

  onlyOdd = false;
  odd: any;
  value= 10;
}
