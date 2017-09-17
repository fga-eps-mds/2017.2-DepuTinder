import { combineReducers } from 'redux';
import answeredQuestionsReducer from './answeredQuestionsReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionsReducer,
});

export default rootReducer;
