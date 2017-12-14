import { renderComponent, expect } from '../test_helper';
import initialState from '../initialStateForTests';
import Questionnaire from '../../src/containers/questionnaire';

describe('Questionnaire', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Questionnaire, null, initialState);
  });

  it('renders a questionnaire body', () => {
    expect(component.find('.questionnaireBody')).to_exist;
  });

  it('renders questionnaire pagination', () => {
    expect(component.find('#questionnairePagination')).to_exist;
  });

  it('renders pagination', () => {
    expect(component.find('.pagination')).to_exist;
  });
});
