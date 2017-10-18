import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import propositionDataReducer from './propositionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';
import rankingDataReducer from './rankingDataReducer';
import parlamentariansDataReducer from './parlamentariansDataReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  proposition: propositionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
  rankingData: rankingDataReducer,
  parlamentariansData: parlamentariansDataReducer,
});

export default rootReducer;
