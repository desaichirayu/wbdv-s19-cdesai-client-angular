import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export default class CourseService {

  createCourse = course => fetch(serverURL + '/api/courses', {
    body: JSON.stringify(course),
    headers: {
      'Content-Type': 'application/json' },
    method: 'POST'
  }).then(response => response.json())


  findAllCourses = () => fetch(serverURL + '/api/courses').then(response => response.json());

  findCourseById = courseId => fetch(serverURL + '/api/courses/' + courseId).then(response => response.json());

  updateCourse = (courseId, newCourse, callback) => fetch(serverURL + '/api/courses/' + courseId, {
    method: 'PUT',
    body: JSON.stringify(newCourse),
    headers: {
      'Content-Type': 'application/json' }
  }).then(callback)

  deleteCourse = (courseId, callback) => fetch(serverURL + '/api/courses/' + courseId, {
    method: 'DELETE'
  }).then(callback)
}
