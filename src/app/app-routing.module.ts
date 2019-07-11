import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';


const routes: Routes = [{path: 'course', component: CourseGridComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
