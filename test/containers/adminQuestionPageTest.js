import { renderComponent, expect } from '../test_helper';
import AdminQuestionPage from '../../src/containers/adminPageContainer/adminQuestionPage';

describe('AdminQuestionPage', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(AdminQuestionPage);
  });

  it('shows admin question page', () => {
    expect(component).to.have.class('adminQuestionPage');
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

  it('renders a card-reveal', () => {
    expect(component.find('#cardReveal')).to.exist;
  });

  it('renders a button', () => {
    expect(component.find('#backButtonCollumn')).to.exist;
  });

  it('renders a sideNav', () => {
    expect(component.find('#slide-out')).to.exist;
  });
});
