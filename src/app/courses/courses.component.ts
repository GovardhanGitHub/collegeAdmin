import { Component, OnInit } from '@angular/core';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor( private courseService: CourseService) { }

  ngOnInit(): void {
  }


  courses = this.courseService.findAllCourses();

}
