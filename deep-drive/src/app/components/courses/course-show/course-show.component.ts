import { Component } from '@angular/core';
import { COURSES } from '../../../../db-data';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-show',
  templateUrl: './course-show.component.html',
  styleUrl: './course-show.component.css'
})
export class CourseShowComponent {
  courses = COURSES;
  title = COURSES[0].description;
  price = 9.99;
  rate= 0.20 ;

onCourseSelected(course: Course){
  console.log("card component clicked event enabled", course)
}

// trackCourse(index: number, course: Course){
//   return course.id
// }
}
