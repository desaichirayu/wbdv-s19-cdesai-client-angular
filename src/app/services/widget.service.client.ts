import * as constants from '../constants';
import {Injectable} from '@angular/core';
const serverURL = constants.SERVER_URL;

@Injectable({providedIn: 'root'})
export class WidgetServiceClient {

  findWidgetsForTopic = (topicId) => fetch(serverURL + '/api/topics/' + topicId + '/widgets')
    .then(response => response.json())

  findWidgetById = (widgetId) => fetch(serverURL + '/api/widgets/' + widgetId)
    .then(response => response.json())
}
