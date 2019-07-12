import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseService} from './services/course.service';
import {ModuleService} from './services/module.service';
import {LessonService} from './services/lesson.service';
import {TopicService} from './services/topic.service';
import {WidgetService} from './services/widget.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService, ModuleService, LessonService, TopicService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
