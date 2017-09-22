import { renderComponent, expect } from '../test_helper';
import MainButton from '../../src/components/mainButton';

describe('MainButton', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(MainButton);
  });
  it('shows Main Button', () => {
    expect(component).to.have.class('mainButton');
  });
});
