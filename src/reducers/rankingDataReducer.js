import { FETCH_RANKING_DATA } from '../actions/fetchRankingData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_RANKING_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
