import { renderComponent, expect } from '../test_helper';
import RankingResultPanel from '../../src/containers/rankingResultPanel';

describe('RankingResultPanel', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(RankingResultPanel);
  });
  it('shows rankingResultPanel', () => {
    expect(component).to.have.class('react-sanfona');
  });
});
