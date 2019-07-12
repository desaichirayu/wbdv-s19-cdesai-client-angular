import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../services/lesson.service';

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
  constructor(private activatedRoute: ActivatedRoute, private service: LessonService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.service.findAllLessonForModuleById(this.moduleId).then(lessons => this.lessons = lessons);
      }
    );
  }

}
