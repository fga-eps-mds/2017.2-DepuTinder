import { renderComponent, expect } from '../test_helper';
import AdminPage from '../../src/containers/adminPageContainer/adminPage';

describe('AdminPage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminPage);
  });

  it('renders a button', () => {
    expect(component.find('#questionButtonCollumn')).to.exist;
  });

  it('renders a button', () => {
    expect(component.find('#questionnaireButtonCollumn')).to.exist;
  });

});
