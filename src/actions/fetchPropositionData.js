import axios from 'axios';

export const FETCH_PROPOSITION_DATA = 'FETCH_PROPOSITION_DATA';
const URL_API = 'http://localhost:8000/propositions/';
const FAKE_API = 'https://api.myjson.com/bins/m7f4x';
const HOST = URL_API;

export const FetchPropositionData = () => {
  const request = axios.get(HOST);
  return {
    type: FETCH_PROPOSITION_DATA,
    payload: request,
  };
};
