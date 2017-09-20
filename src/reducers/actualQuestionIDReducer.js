import { SAVE_ACTUAL_QUESTION_ID } from '../actions/saveActualQuestionID';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_ACTUAL_QUESTION_ID:
      return action.payload;
    default:
      return state;
  }
}
