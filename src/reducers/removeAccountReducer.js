import { REMOVE_ACCOUNT_ACTION } from '../actions/removeAccountAction';

export default function (state = {}, action) {
  switch (action.type) {
    case REMOVE_ACCOUNT_ACTION:
      return action.payload;
    default:
      return state;
  }
}
