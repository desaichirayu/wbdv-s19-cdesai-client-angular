import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId = -1;
  moduleId = -1;
  lessonId = -1;
  lessons = [];
  constructor(private activatedRoute: ActivatedRoute, private service: LessonServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
      }
    );
  }

}
