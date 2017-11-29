import { FETCH_QUESTION_DATA } from '../actions/fetchQuestionData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_QUESTION_DATA:
      // console.log('action' + action.payload);
      return action.payload;
    default:
      return state;
  }
}
