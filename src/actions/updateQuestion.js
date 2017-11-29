import axios from 'axios';

const HOST = 'http://localhost:8000/updateQuestion/';

export default function updateQuestion(questionnaire, title) {
  axios.put(`${HOST}`, {
    questionnaireFK: questionnaire,
    questionTitle: title,
  });
}
