import React from 'react';
import { createStore } from 'redux';
import { expect } from '../test_helper';
import { Provider } from 'react-redux';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findAllInRenderedTree,
  isDOMComponent
} from 'react-addons-test-utils';
import reducers from '../../src/reducers';
import NavBar from '../../src/containers/navbar';

const actualAdminUserTest = {
  data: {
    userName:'admin',
  },
  admin: true,
}

const actualUserTest = {
  data: {
    userName:'user',
  },
  admin: false,
}

const adminState = {actualUser: actualAdminUserTest};
const userState = {actualUser: actualUserTest};

function scryRenderedDOMComponentsWithId(component, id) {
  return findAllInRenderedTree(component, (inst) => {
    return isDOMComponent(inst) && inst.getAttribute("id") === id;
  });
}

describe('NavBar', () => {
  let component;
  beforeEach(() => {
    component = renderIntoDocument(
      <Provider store={createStore(reducers, userState)}>
        <NavBar />
      </Provider>
    );
  });

  it('render navBar', () => {
    const navBar = scryRenderedDOMComponentsWithId(component, 'navBar');
    expect(navBar).to.exist;
  });

  it('shows components from navbar on PC', () => {
    const navBar = scryRenderedDOMComponentsWithId(component, '#renderNavBar');
    expect(navBar).to.exist;
  });

  it('shows components from navbar on Mobile', () => {
    const navBar = scryRenderedDOMComponentsWithId(component, '#renderNavBarMobile');
    expect(navBar).to.exist;
  });
});
