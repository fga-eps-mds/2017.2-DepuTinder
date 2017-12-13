import axios from 'axios';

const HOST = 'http://deputinder-api.herokuapp.com/question/';

export default function saveQuestion(title, questionnaire) {
  axios.post(`${HOST}`, {
    questionTitle: title,
    questionnaireFK: questionnaire });
}
