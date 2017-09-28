import { FETCH_CANDIDATE_VOTE } from '../actions/fetchCandidateVote';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CANDIDATE_VOTE:
      return action.payload;
    default:
      return state;
  }
}
