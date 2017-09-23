import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import Questionnaire from './containers/questionnaire';
import ListAnsweredQuestions from './containers/listAnsweredQuestions';

export default (
  <Route>
    <Route exact path="/" component={App}>
      <Route exact path="/answer" component={Questionnaire} />
      <Route exact path="/listAnswers" component={ListAnsweredQuestions} />
    </Route>
  </Route>
);
