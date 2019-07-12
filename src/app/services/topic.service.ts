import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class TopicService {

  createTopic = (lessonId, topic) => fetch(serverURL + '/api/lessons/' + parseInt(lessonId, 10) + '/topics', {
    method: 'POST',
    body: JSON.stringify(topic),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

  findAllTopicsForLessonById = lessonId => fetch(serverURL + '/api/lessons/' + parseInt(lessonId, 10) + '/topics')
    .then(response => response.json())

  updateTopic = (topicId, newTopic, callback) => fetch(serverURL + '/api/topics/' + parseInt(topicId, 10), {
    method: 'PUT',
    body: JSON.stringify(newTopic),
    headers: {
      'content-type': 'application/json'
    }
  }).then(callback)

  deleteTopic = (topicId, callback) => fetch(serverURL + '/api/topics/' + parseInt(topicId, 10), {
    method: 'DELETE'
  }).then(callback)
}
