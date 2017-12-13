import axios from 'axios';

const HOST = 'http://deputinder-api.herokuapp.com/updateUser/';

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
