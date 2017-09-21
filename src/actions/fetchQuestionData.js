import axios from 'axios';

export const FETCH_QUESTION_DATA = 'FETCH_QUESTION_DATA';

export const FetchQuestionData = () => {
  const request = axios.get('https://api.myjson.com/bins/11jl59');

  return {
    type: FETCH_QUESTION_DATA,
    payload: request,
  };
};
