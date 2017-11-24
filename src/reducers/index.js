import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import answeredQuestionReducer from './answeredQuestionReducer';
import propositionDataReducer from './propositionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';
import rankingDataReducer from './rankingDataReducer';
import parlamentariansDataReducer from './parlamentariansDataReducer';
import parlamentariansSearchDataReducer from './parlamentariansSearchDataReducer';
import selectedParlamentary from './selectedParlamentary';
import actualUser from './actualUserReducer';
import questionDataReducer from './questionDataReducer';
import deleteActualUser from './removeAccountReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  propositions: propositionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
  rankingData: rankingDataReducer,
  parlamentariansData: parlamentariansDataReducer,
  parlamentariansSearch: parlamentariansSearchDataReducer,
  selectedParlamentary,
  form: formReducer,
  actualUser,
  questionData: questionDataReducer,
  deleteActualUser,
});

export default rootReducer;
