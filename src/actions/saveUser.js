import axios from 'axios';

const HOST = 'http://localhost:8000/users/';

export default function saveUser(nameParam, emailParam, passwordParam) {
  // console.log('ACTION');
  axios.post(`${HOST}`, {
    name: nameParam,
    email: emailParam,
    password: passwordParam,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}
