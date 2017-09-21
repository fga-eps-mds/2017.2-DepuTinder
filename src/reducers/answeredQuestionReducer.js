import { FETCH_ANSWER_QUESTION } from '../actions/fetchAnswerQuestion';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ANSWER_QUESTION:
      return [...state, action.payload];
    default:
      return state;
  }
}
