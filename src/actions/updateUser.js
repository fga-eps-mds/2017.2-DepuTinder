import axios from 'axios';

const HOST = 'http://localhost:8000/updateUser/';

export default function updateUser(
  oldEmailParam,
  oldPasswordParam,
  nameParam,
  emailParam,
  passwordParam) {
  if (passwordParam !== '') {
    axios.put(`${HOST}`, {
      userName: nameParam,
      userEmail: emailParam,
      userPassword: passwordParam,
      userImage: '',
      oldUserEmail: oldEmailParam,
      oldUserPassword: oldPasswordParam,
    });
  } else {
    axios.put(`${HOST}`, {
      userName: nameParam,
      userEmail: emailParam,
      userImage: '',
      oldUserEmail: oldEmailParam,
      oldUserPassword: oldPasswordParam,
    });
  }
}
