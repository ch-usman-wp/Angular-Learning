import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseCardComponent } from './components/courses/course-card/course-card.component';
import { CourseImageComponent } from './components/courses/course-image/course-image.component';
import { CourseShowComponent } from './components/courses/course-show/course-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CourseCardComponent,
    CourseImageComponent,
    CourseShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
