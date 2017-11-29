import axios from 'axios';

export const FETCH_QUESTION_DATA = 'FETCH_QUESTION_DATA';
const URL_API = 'http://localhost:8000/question/';
const HOST = URL_API;

export const FetchQuestionData = () => {
  const request = axios.get(HOST);
  return {
    type: FETCH_QUESTION_DATA,
    payload: request,
  };
};
