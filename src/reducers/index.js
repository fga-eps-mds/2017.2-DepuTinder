import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import propositionDataReducer from './propositionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';
import rankingDataReducer from './rankingDataReducer';
import parlamentariansDataReducer from './parlamentariansDataReducer';
import parlamentariansNameDataReducer from './parlamentariansNameDataReducer';
import selectedParlamentary from './selectedParlamentary';


const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  proposition: propositionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
  rankingData: rankingDataReducer,
  parlamentariansData: parlamentariansDataReducer,
  parlamentariansNames: parlamentariansNameDataReducer,
  selectedParlamentary,
});

export default rootReducer;
