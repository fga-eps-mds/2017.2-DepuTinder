import { renderComponent, expect } from '../test_helper';
import AdminQuestionPage from '../../src/containers/adminPageContainer/adminQuestionPage';

describe('AdminQuestionPage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminQuestionPage);
  });

  it('shows admin question page', () => {
    expect(component).to.have.class('adminQuestionPage');
  });

});
