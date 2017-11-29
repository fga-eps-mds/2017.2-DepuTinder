import axios from 'axios';

const HOST = 'http://localhost:8000/users/';

export default function faceOrGoogleLogin(nameParam, emailParam,
  facebookParam, googleParam, imageParam) {
  // console.log('ACTION');
  axios.post(`${HOST}`, {
    isFromFacebook: facebookParam,
    isFromGoogle: googleParam,
    userName: nameParam,
    userEmail: emailParam,
    userImage: imageParam,
  });
}
