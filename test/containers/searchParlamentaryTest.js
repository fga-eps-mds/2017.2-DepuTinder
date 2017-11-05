import { renderComponent, expect } from '../test_helper';
import SearchParlamentary from '../../src/containers/searchContainer/searchParlamentary';


describe('SearchParlamentary', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchParlamentary);
  });

  it('renders an input', () => {
    expect(component.find('input')).to.exist;
  });

  describe('searching one parlamentary', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'abel');
    });
    it('shows a list tag', () => {
      expect(component.find('ul')).to.exist;
    });
  });
});
