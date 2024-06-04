import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Output()  public childEvent = new EventEmitter();

fireEvent(){
  this.childEvent.emit('Test message');
}
}
