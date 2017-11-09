import axios from 'axios';

const HOST = 'http://localhost:8000/question/';

export default function saveQuestion(title, subtitle, description, author) {
  axios.post(`${HOST}`, {
    questionTitle: title,
    questionSubtitle: subtitle,
    questionDescription: description,
    questionAuthor: author,
  })
  .then((response) => {
    console.log(response);
  })
    .catch((error) => {
      console.log(error);
    });
}
