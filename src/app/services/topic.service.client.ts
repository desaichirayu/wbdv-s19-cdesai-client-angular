import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class TopicServiceClient {

  findAllTopicsForLessonById = lessonId => fetch(serverURL + '/api/lessons/' + parseInt(lessonId, 10) + '/topics')
    .then(response => response.json())

  findTopicById = topicId => fetch(serverURL + '/api/topics/' + parseInt(topicId, 10)).then(response => response.json());
}
