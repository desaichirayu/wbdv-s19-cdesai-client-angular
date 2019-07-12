import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';


@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service: CourseService) {
  }

  ngOnInit() {
  }

}
