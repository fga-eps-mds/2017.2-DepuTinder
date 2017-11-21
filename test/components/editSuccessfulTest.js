import { renderComponent, expect } from '../test_helper';
import EditSuccessful from '../../src/components/editSuccessful';

describe('EditSuccessful', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(EditSuccessful);
  });
  it('render edit success message div', () => {
    expect(component.find('#successHeading')).to.exist;
  });
});
