import axios from 'axios';

const HOST = 'http://localhost:8000/createUser/';

export default function userRegisterRequest(nameParam, emailParam, passwordParam, imageParam) {
  axios.post(`${HOST}`, {
    userName: nameParam,
    userEmail: emailParam,
    userPassword: passwordParam,
    userImage: imageParam,
  });
}
