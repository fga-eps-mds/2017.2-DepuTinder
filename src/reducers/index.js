import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import questionDataReducer from './questionDataReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  questionData: questionDataReducer,
});

export default rootReducer;
