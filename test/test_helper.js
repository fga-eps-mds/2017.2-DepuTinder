import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from '../src/reducers';
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';

global.document = jsdom.jsdom('<!doctype html><html><body><script></script</body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const createStoreWithMiddleware = applyMiddleware(
    promise,
  )(createStore);

  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStoreWithMiddleware(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>,
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
