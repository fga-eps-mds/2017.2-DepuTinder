import axios from 'axios';

export const FETCH_PARLAMENTARIANS_DATA = 'FETCH_PARLAMENTARIANS_DATA';
const URL_API = 'http://deputinder-api.herokuapp.com/';
const HOST = URL_API;

export const fetchParlamentariansData = () => {
  const request = axios.get(`${HOST}/parlamentarians`);
  return {
    type: FETCH_PARLAMENTARIANS_DATA,
    payload: request,
  };
};
