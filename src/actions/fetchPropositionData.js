import axios from 'axios';

export const FETCH_PROPOSITION_DATA = 'FETCH_PROPOSITION_DATA';

export const FetchPropositionData = () => {
  const request = axios.get('https://api.myjson.com/bins/m7f4x');

  return {
    type: FETCH_PROPOSITION_DATA,
    payload: request,
  };
};
