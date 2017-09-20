import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import questionDataReducer from './questionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  questionData: questionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
});

export default rootReducer;
