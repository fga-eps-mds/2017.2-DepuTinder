import { renderComponent, expect } from '../test_helper';
import initialState from '../initialStateForTests';
import AdminListPropositions from '../../src/containers/adminPageContainer/adminListPropositions';

describe('AdminListPropositions', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminListPropositions, null, initialState);
  });

  it('renders a cardSideNav', ()=> {
    expect(component.find('#cardSideNav')).to_exist;
  });
});
