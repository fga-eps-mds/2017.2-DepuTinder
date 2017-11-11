import { renderComponent, expect } from '../test_helper';
import AdminFormQuestion from '../../src/containers/adminPageContainer/adminFormQuestion';

describe('AdminFormQuestion', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminFormQuestion);
  });

  it('shows admin form question', () => {
    expect(component).to.have.class('adminFormQuestion');
  });

  it('renders the autocomplete', () => {
    expect(component.find('#autocompleteTitle')).to.exist;
  });

  it('renders the input title', () => {
    expect(component.find('#inputTitle')).to.exist;
  });

  it('renders the input subtitle', () => {
    expect(component.find('#inputSubtitle')).to.exist;
  });

  it('renders the input description', () => {
    expect(component.find('#inputDescription')).to.exist;
  });

  it('renders a button', () => {
    expect(component.find('#saveQuestionButton')).to.exist;
  });
});
