import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import Questionnaire from './containers/questionnaire';
import Ranking from './containers/ranking';

export default (
  <Route>
    <Route exact path="/" component={App}>
      <Route exact path="/answer" component={Questionnaire} />
      <Route exact path="/ranking" component={Ranking} />
    </Route>
  </Route>
);
