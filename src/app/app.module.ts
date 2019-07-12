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
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent
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
