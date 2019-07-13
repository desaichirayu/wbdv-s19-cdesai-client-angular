import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';


@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service: CourseServiceClient) {
  }

  ngOnInit() {
  }

}
