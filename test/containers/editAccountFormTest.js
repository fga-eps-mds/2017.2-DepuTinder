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
import EditAccountForm from '../../src/containers/editAccountForm';
import reducers from '../../src/reducers';

const actualUserTest = {
  data: {
    userName:'admin',
    userEmail:'admin@admin.com',
  }
}
const initialState = {actualUser: actualUserTest};

function scryRenderedDOMComponentsWithId(component, id) {
  return findAllInRenderedTree(component, (inst) => {
    return isDOMComponent(inst) && inst.getAttribute("id") === id;
  });
}

describe('EditAccountForm', () => {
let component;
beforeEach(() => {
    component = renderIntoDocument(
      <Provider store={createStore(reducers, initialState)}>
        <EditAccountForm />
      </Provider>
    );
  });

  it('render the input userName', () => {
      //expect(component.find('#nameInputDiv')).to.exist;
      const nameInput = scryRenderedDOMComponentsWithId(component, 'nameInputDiv');
      expect(nameInput).to.exist;
  });

  it('render the input userEmail', () => {
    const emailInput = scryRenderedDOMComponentsWithId(component, 'emailInputDiv');
    expect(emailInput).to.exist;
  });

  it('render the input password', () => {
    const passwordInput = scryRenderedDOMComponentsWithId(component, 'passwordInputDiv');
    expect(passwordInput).to.exist;
  });

  it('render the password confirm input', () => {
    const passwordConfirmInput = scryRenderedDOMComponentsWithId(component, 'passwordConfirmInputDiv');
    expect(passwordConfirmInput).to.exist;
  });

  it('render signUp button ', () => {
      const editAccountButton = scryRenderedDOMComponentsWithId(component, 'editAccountButton');
      expect(editAccountButton).to.exist;
  });

});
