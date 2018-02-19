import axios from 'axios';

const HOST = 'http://deputinder-api.herokuapp.com/question/';

export default function saveQuestion(title, subtitle, description, author, id) {
  axios.post(`${HOST}`, {
    questionTitle: title,
    questionSubtitle: subtitle,
    questionDescription: description,
    questionAuthor: author,
    propositionFK: id });
}
