import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})

export class CourseGridComponent implements OnInit {

  courses = [];
  constructor(private service: CourseService) { }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
