import { SAVE_ANSWER_QUESTION } from '../actions/saveAnswerQuestion';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER_QUESTION:
      return action.payload;
    default:
      return state;
  }
}
