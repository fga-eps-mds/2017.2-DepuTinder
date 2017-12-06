import axios from 'axios';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';

export const userLoginRequest = (email, password) => {
  const HOST = 'http://localhost:8000/userLogin/';
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
