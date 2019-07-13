import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class LessonServiceClient {

  findLessonsForModule = moduleId => fetch(serverURL + '/api/modules/' + parseInt(moduleId, 10) + '/lessons')
    .then(response => response.json())

  findLessonById = lessonId => fetch( serverURL + '/api/lessons/' + parseInt(lessonId, 10)).then(response => response.json());
}
