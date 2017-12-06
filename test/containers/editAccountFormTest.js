import { renderComponent, expect } from '../test_helper';
import initialState from '../../src/reducers/initialState';
import EditAccountForm from '../../src/containers/editAccountForm';

describe('EditAccountForm', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(EditAccountForm, null, initialState);
  });

  it('render the input userName', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });

  it('render the input userEmail', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });

  it('render the input password', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });

  it('render the password confirm input', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });

  it('render signUp button ', () => {
    expect(component.find('#nameInputDiv')).to.exist;
  });
});
