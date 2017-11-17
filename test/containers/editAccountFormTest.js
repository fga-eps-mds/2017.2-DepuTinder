import { renderComponent, expect } from '../test_helper';
import EditAccountForm from '../../src/containers/editAccountForm';

describe('EditAccountForm', () => {
let component;
const actualUser = {
  data: {
    userName:'admin',
    userEmail:'admin@admin.com',
  }
}
beforeEach(() => {
    component = renderComponent(EditAccountForm, actualUser);
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
      expect(component.find('#editAccountButton')).to.exist;
  });

});
