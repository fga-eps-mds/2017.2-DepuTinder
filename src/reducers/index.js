import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import questionDataReducer from './questionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';
import rankingDataReducer from './rankingDataReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  proposition: questionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
  rankingData: rankingDataReducer,
});

export default rootReducer;
