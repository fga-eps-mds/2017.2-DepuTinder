import { renderComponent, expect } from '../test_helper';
import SignIn from '../../src/containers/signIn';

describe('SignIn', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(SignIn);
  });

  it('show logIn page', () => {
    expect(component).to.have.class('logInPage')
  });

  it('render the input userEmail', () => {
    expect(component.find('#userEmail')).to.exist;
  });

  it('render the input userPassword', () => {
    expect(component.find('#inputPassword')).to.exists;
  });

  it('renders the SignInButton', () => {
      expect(component.find('#loginButton')).to.exists;
  });

  it ('renders the removeAccountButton', () => {
    expect(component.find('#removeAccountButton')).to.exists;
  });
});
