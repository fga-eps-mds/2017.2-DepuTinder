import axios from 'axios';

export const SAVE_ACTUAL_USER = 'SAVE_ACTUAL_USER';

export const saveActualUser = (email, password) => {
  const HOST = 'http://localhost:8000/login/';
  const data = {
    userEmail: email,
    userPassword: password,
  };

  const request = axios.put(HOST, data);

  console.log(request);

  return {
    type: SAVE_ACTUAL_USER,
    payload: request,
  };
};
