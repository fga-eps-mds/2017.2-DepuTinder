import axios from 'axios';

const HOST = 'http://deputinder-api.herokuapp.com/updateQuestion/';

export default function updateQuestion(questionnaire, title) {
  axios.put(`${HOST}`, {
    questionnaireFK: questionnaire,
    questionTitle: title,
  });
}
