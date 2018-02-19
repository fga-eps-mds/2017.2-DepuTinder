import { renderComponent, expect } from '../test_helper';
import initialState from '../initialStateForTests';
import AnsweredQuestionsPanel from '../../src/containers/answeredQuestionsPanel';

describe('AnsweredQuestionsPanel', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AnsweredQuestionsPanel, null, initialState);
  });

  it('render answer panel', () => {
    expect(component.find('#answerPanelTitle')).to.exist;
  });

  it('render answer list', () => {
    expect(component.find('#listAnswers')).to.exist;
  });

  it('render answer list buttons', () => {
    expect(component.find('#answerListButtonsRow')).to.exist;
  });
});
