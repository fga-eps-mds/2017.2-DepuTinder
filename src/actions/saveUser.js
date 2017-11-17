import axios from 'axios';

const HOST = 'http://localhost:8000/users/';

export default function saveUser(nameParam, emailParam, passwordParam) {
  // console.log('ACTION');
  axios.post(`${HOST}`, {
    userName: nameParam,
    userEmail: emailParam,
    userPassword: passwordParam,
    userImage: '',
  });
}
