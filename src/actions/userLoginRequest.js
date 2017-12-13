import axios from 'axios';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';

export const userLoginRequest = (email, password) => {
  const HOST = 'http://deputinder-api.herokuapp.com/userLogin/';
  const data = {
    userEmail: email,
    userPassword: password,
  };

  const request = axios.put(HOST, data);

  return {
    type: USER_LOGIN_REQUEST,
    payload: request,
  };
};
