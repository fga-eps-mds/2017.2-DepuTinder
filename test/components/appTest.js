import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('shows NavBar', () => {
    expect(component.find('.navBar')).to.exist;
  });
});
