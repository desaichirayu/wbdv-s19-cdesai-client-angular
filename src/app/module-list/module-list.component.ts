import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  courseId = -1;
  moduleId = -1;
  modules = [];

  constructor(private activatedRoute: ActivatedRoute, private service: ModuleServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
    }
    );
  }

}
