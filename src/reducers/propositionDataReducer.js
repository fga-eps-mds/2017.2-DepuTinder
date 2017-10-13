import { FETCH_PROPOSITION_DATA } from '../actions/fetchPropositionData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PROPOSITION_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
