import { renderComponent, expect } from '../test_helper';
import AdminQuestionnairePage from '../../src/containers/adminPageContainer/adminQuestionnaire/adminQuestionnairePage';

describe('AdminQuestionnairePage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminQuestionnairePage);
  });

  it('shows admin questionnaire page', () => {
    expect(component).to.have.class('adminQuestionnairePage');
  });

  it('renders a button', () => {
    expect(component.find('#backButtonCollumn')).to.exist;
  });

  it('renders a button', () => {
    expect(component.find('#sendButtonCollumn')).to.exist;
  });
});
