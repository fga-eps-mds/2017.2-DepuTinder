import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';

export default (
  <Route>
    <Route exact path="/" component={App} />
  </Route>
);
