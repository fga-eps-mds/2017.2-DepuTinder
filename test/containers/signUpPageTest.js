import { renderComponent, expect } from '../test_helper';
import SignUpForm from '../../src/components/signUpForm';

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

});
