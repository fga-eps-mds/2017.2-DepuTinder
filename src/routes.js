import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import Questionnaire from './containers/questionnaire';
import AnsweredQuestionsPanel from './containers/answeredQuestionsPanel';
import Ranking from './containers/ranking';
import SearchParlamentary from './containers/searchContainer/searchParlamentary';
import ShowParlamentary from './containers/showParlamentary';
import AdminPage from './containers/adminPage';

export default (
  <Route>
    <Route exact path="/" component={App}>
      <Route exact path="/responder" component={Questionnaire} />
      <Route exact path="/listar_respostas" component={AnsweredQuestionsPanel} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/search" component={SearchParlamentary} />
      <Route exact path="/showParlamentary" component={ShowParlamentary} />
      <Route exact path="/admin" component={AdminPage} />
    </Route>
  </Route>
);
