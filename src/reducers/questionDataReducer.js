import { FETCH_QUESTION_DATA } from '../actions/fetchQuestionData';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTION_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
