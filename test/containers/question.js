import { renderComponent, expect } from '../test_helper';
import initialState from '../initialStateForTests';
import Question from '../../src/containers/question';

describe('Question', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Question, null, initialState);
  });

  it('renders a card', () => {
    expect(component.find('#questionCard')).to_exist;
  });
});
