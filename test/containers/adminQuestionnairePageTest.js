import { renderComponent, expect } from '../test_helper';
import AdminQuestionnairePage from '../../src/containers/adminPageContainer/adminQuestionnairePage';

describe('AdminQuestionnairePage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminQuestionnairePage);
  });

  it('shows admin questionnaire page', () => {
    expect(component).to.have.class('adminQuestionnairePage');
  });

});
