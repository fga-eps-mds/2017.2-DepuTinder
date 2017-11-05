import { SELECT_PARLAMENTARY } from '../actions/selectParlamentary';

export default function (state = [], action) {
  switch (action.type) {
    case SELECT_PARLAMENTARY:
      return action.payload;
    default:
      return state;
  }
}
