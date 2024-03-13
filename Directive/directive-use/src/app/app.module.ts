import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive/unless/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
