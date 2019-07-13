import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  courseId = -1;
  moduleId = -1;
  lessonId = -1;
  topicId = -1;
  widgets = [];

  constructor(private activatedRoute: ActivatedRoute, private service: WidgetServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.service.findWidgetsForTopic(this.topicId).then(widgets => this.widgets = widgets);
      }
    );
  }

  splitItems(items) {
    return items.split(',');
  }

}
