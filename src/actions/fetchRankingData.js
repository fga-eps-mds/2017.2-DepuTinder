import axios from 'axios';

export const FETCH_RANKING_DATA = 'FETCH_RANKING_DATA';

const API = 'http://localhost:8000/ranking/';
const HOST = API;

export const FetchRankingData = () => {
  const request = axios.get(HOST);

  return {
    type: FETCH_RANKING_DATA,
    payload: request,
  };
};
