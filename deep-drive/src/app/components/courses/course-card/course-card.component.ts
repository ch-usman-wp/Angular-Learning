import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {

  @Input()
  course!: Course;


  @Input()
  index!: number;

  @Input()
  cardIndex!: number

  @Output()
  courseSelected = new EventEmitter<Course>();
  

  startDate= new Date(2000, 0, 1);
  onCourseViewed() {
    console.log("Card component button clicked", this.course);
    this.courseSelected.emit(this.course);
  }
  cardClasses(){
    return{
      'beginner':this.course.category == 'BEGINNER', 
      'course-card': true
     };
  }
  cardStyles(){
    return{
      'background-image': 'url('+this.course.iconUrl+')'

    }
  }
}



