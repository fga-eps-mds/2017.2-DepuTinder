import { renderComponent, expect } from '../test_helper';
import ListAnsweredQuestions from '../../src/containers/listAnsweredQuestions';


describe('ListAnsweredQuestions', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ListAnsweredQuestions);
  });

  it('shows collapsible for a question', () => {
    expect(component.find('.unique-collapsible')).to.exist
  });
});
