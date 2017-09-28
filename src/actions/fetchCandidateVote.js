import axios from 'axios';

export const FETCH_CANDIDATE_VOTE = 'FETCH_CANDIDATE_VOTE';

export const fetchCandidateVote = () => {
  const request = axios.get('https://api.myjson.com/bins/17w6e1');
  return {
    type: FETCH_CANDIDATE_VOTE,
    payload: request,
  };
};
