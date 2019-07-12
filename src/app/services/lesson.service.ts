import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class LessonService {

  createLesson = (moduleId, lesson) => fetch(serverURL + '/api/modules/' + parseInt(moduleId, 10) + '/lessons', {
    method: 'POST',
    body: JSON.stringify(lesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  findAllLessonForModuleById = moduleId => fetch(serverURL + '/api/modules/' + parseInt(moduleId, 10) + '/lessons')
    .then(response => response.json())

  findLessonById = lessonId => fetch( serverURL + '/api/lessons/' + parseInt(lessonId, 10)).then(response => response.json());

  updateLesson = (lessonId, newLesson, callback) => fetch(serverURL + '/api/lessons/' + parseInt(lessonId, 10), {
    method: 'PUT',
    body: JSON.stringify(newLesson),
    headers: {
      'content-type': 'application/json'
    }
  }).then(callback)

  deleteLesson = (lessonId, callback) => fetch(serverURL + '/api/lessons/' + parseInt(lessonId, 10), {
    method: 'DELETE'
  }).then(callback)
}
