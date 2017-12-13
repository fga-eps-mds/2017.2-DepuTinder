import axios from 'axios';

export const REMOVE_ACCOUNT_ACTION = 'REMOVE_ACCOUNT_ACTION';

export const removeAccount = (email) => {
  const HOST = 'http://deputinder-api.herokuapp.com/users/';
  const params = { data: { userEmail: email } };

  const request = axios.delete(HOST, params);

  return {
    type: REMOVE_ACCOUNT_ACTION,
    payload: request,
  };
};
