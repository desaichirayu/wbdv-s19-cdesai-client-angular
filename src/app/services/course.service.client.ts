import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class CourseServiceClient {

  findAllCourses = () => fetch(serverURL + '/api/courses').then(response => response.json());

  findCourseById = courseId => fetch(serverURL + '/api/courses/' + courseId).then(response => response.json());
}
