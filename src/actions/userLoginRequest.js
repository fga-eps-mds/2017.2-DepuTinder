import axios from 'axios';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const DELETE_ACTUAL_USER = 'DELETE_ACTUAL_USER';

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

export const deleteActualUser = () => {
  return {
    type: DELETE_ACTUAL_USER,
    payload: {},
  };
};
