import { renderComponent, expect } from '../test_helper';
import HomePage from '../../src/components/homePage';

describe('HomePage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(HomePage);
  });
  it('render Main Button', () => {
    expect(component.find('.mainButton')).to.exist;
  });
});
