import { renderComponent, expect } from '../test_helper';
import initialState from '../initialStateForTests';
import EditAccountForm from '../../src/containers/editAccountForm';

const props = {

}

describe('EditAccountForm', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(EditAccountForm, null, initialState);
  });

  it('render the input userName', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });

  it('render the input userEmail', () => {
    expect(component.find('#emailInputDiv')).to.exist;
  });

  it('render the input password', () => {
    expect(component.find('#passwordInputDiv')).to.exist;
  });

  it('render the password confirm input', () => {
    expect(component.find('#passwordConfirmInputDiv')).to.exist;
  });

  it('render signUp buttons ', () => {
    expect(component.find('#buttonGroup')).to.exist;
  });

  it('renders the removeAccountButton', () => {
    expect(component.find('#removeAccountButton')).to.exist;
  });
});
