import axios from 'axios';

export const FETCH_PROPOSITION_DATA = 'FETCH_PROPOSITION_DATA';
const URL_API = 'http://localhost:8000/propositions/';
const HOST = URL_API;

export const FetchPropositionData = () => {
  const request = axios.get(HOST);
  return {
    type: FETCH_PROPOSITION_DATA,
    payload: request,
  };
};
