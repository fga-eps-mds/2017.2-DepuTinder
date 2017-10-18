import { renderComponent, expect } from '../test_helper';
import Ranking from '../../src/containers/ranking';

describe('Ranking', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Ranking);
  });

  it('render a progress bar', () => {
    expect(component).to.have.class('progress');
  });
});
