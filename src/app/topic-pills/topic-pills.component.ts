import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../services/topic.service';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId = -1;
  moduleId = -1;
  lessonId = -1;
  topicId = -1;
  topics = [];
  constructor(private activatedRoute: ActivatedRoute, private service: TopicService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.service.findAllTopicsForLessonById(this.lessonId).then(topics => this.topics = topics);
      }
    );
  }
}
