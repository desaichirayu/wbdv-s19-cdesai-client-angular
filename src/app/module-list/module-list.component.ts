import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../services/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  courseId = -1;
  moduleId = -1;
  modules = [];

  constructor(private activatedRoute: ActivatedRoute, private service: ModuleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findAllModuleForCourseById(this.courseId).then(modules => this.modules = modules);
    }
    );
  }

}
