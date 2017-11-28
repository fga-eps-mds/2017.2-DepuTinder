import { SELECT_QUESTION } from '../actions/selectQuestion';

export default function (state = [], action) {
  switch (action.type) {
    case SELECT_QUESTION:
      return action.payload;
    default:
      return state;
  }
}
