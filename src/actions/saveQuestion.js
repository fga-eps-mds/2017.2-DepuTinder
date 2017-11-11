import axios from 'axios';

const HOST = 'http://localhost:8000/question/';

export default function saveQuestion(id, title, subtitle, description, author) {
  axios.post(`${HOST}`, {
    propositionFK: id,
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
