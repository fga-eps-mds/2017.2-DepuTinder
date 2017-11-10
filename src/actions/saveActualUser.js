import axios from 'axios';

export const SAVE_ACTUAL_USER = 'SAVE_ACTUAL_USER';

export const saveActualUser = (email, password) => {
  const HOST = 'http://localhost:8000/users/';
  const data = {
    userEmail: email,
    userPassword: password,
  };

  const request = axios.put(HOST, data);

  return {
    type: SAVE_ACTUAL_USER,
    payload: request,
  };
};
