import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class ModuleServiceClient {

  findModulesForCourse = (courseId) => fetch(serverURL + '/api/courses/' + parseInt(courseId, 10) + '/modules')
    .then(response => response.json())

  findModuleById = (moduleId) => fetch( serverURL + '/api/modules/' + parseInt(moduleId, 10)).then(response => response.json());
}
