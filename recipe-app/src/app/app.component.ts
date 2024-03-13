import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'recipe-app';
loadedFeature = 'recipe'
  onNavigate(feature: string){
    this.loadedFeature= feature;
  }
}
