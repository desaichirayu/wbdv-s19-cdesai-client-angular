import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class ModuleService {

  createModuleForCourseId = (courseId, module) => fetch(serverURL + '/api/courses/' + parseInt(courseId, 10) + '/modules', {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  findAllModuleForCourseById = (courseId) => fetch(serverURL + '/api/courses/' + parseInt(courseId, 10) + '/modules')
    .then(response => response.json())

  findModuleById = (moduleId) => fetch( serverURL + '/api/modules/' + parseInt(moduleId, 10)).then(response => response.json());

  updateModule = (moduleId, newModule, callback) => fetch(serverURL + '/api/modules/' + parseInt(moduleId, 10), {
    method: 'PUT',
    body: JSON.stringify(newModule),
    headers: {
      'content-type': 'application/json'
    }
  }).then(callback)

  deleteModule = (moduleId, callback) => fetch(serverURL + '/api/modules/' + parseInt(moduleId, 10), {
    method: 'DELETE'
  }).then(callback)
}
