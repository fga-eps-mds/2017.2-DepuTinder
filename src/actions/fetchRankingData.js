import axios from 'axios';

export const FETCH_RANKING_DATA = 'FETCH_RANKING_DATA';

const LOCAL = 'http://deputinder-api.herokuapp.com/ranking/';
const HOST = LOCAL;

export const FetchRankingData = () => {
  const request = axios.get(HOST);

  return {
    type: FETCH_RANKING_DATA,
    payload: request,
  };
};
