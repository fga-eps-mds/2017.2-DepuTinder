import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import Questionnaire from './containers/questionnaire';

export default (
  <Route>
    <Route exact path="/" component={App}>
      <Route exact path="/answerQuestionnaire" component={Questionnaire} />
    </Route>
  </Route>
);
