import { renderComponent, expect } from '../test_helper';
import SignUpForm from '../../src/containers/signUpForm';

describe('SignUpForm', () => {
let component;
beforeEach(() => {
  component = renderComponent(SignUpForm);
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

it('render signUp button ', () => {
    expect(component.find('#signUpButton')).to.exist;
});

});
