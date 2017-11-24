import axios from 'axios';

const HOST = 'http://localhost:8000/users/';

export default function updateUser(nameParam, emailParam, passwordParam) {
  axios.put(`${HOST}`, {
    userName: nameParam,
    userEmail: emailParam,
    userPassword: passwordParam,
    userImage: '',
  });
}
