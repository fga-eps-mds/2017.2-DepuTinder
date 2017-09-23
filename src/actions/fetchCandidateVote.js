import axios from 'axios';

export const FETCH_CANDIDATE_VOTE = 'FETCH_CANDIDATE_VOTE';

export const fetchCandidateVote = () => {
  const request = axios.get('');
  return {
    type: FETCH_CANDIDATE_VOTE,
    payload: request,
  };
};
