import axios from 'axios';

const HOST = 'http://localhost:8000/question/';

export default function saveQuestion(title, questionnaire) {
  axios.post(`${HOST}`, {
    questionTitle: title,
    questionnaireFK: questionnaire });
}
