import { renderComponent, expect } from '../test_helper';
import AdminPage from '../../src/containers/adminPageContainer/adminPage';

describe('AdminPage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminPage);
  });

  it('shows admin page', () => {
    expect(component).to.have.class('AdminPage');
  });

});
