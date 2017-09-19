import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
});

export default rootReducer;
