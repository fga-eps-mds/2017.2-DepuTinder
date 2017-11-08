import axios from 'axios';

const HOST = 'http://localhost:8000/question/';

export default function saveQuestion(questionTitle, questionSubtitle, questionDescription) {
  axios.post(`${HOST}`, {
    title: questionTitle,
    subtitle: questionSubtitle,
    description: questionDescription,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}
