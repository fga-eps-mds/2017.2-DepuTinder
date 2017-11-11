import { renderComponent, expect } from '../test_helper';
import SignUpSuccessful from '../../src/components/signUpSuccessful';

describe('SignUpSuccessful', () => {
  let component;
  beforeEach(()=>{
    component = renderComponent(SignUpSuccessful);
  });

  it('render the success heading', () => {
    expect(component.find('#successHeading')).to.exist;
  })

  it('render homePage button', () => {
    expect(component.find('#homePageButton')).to.exist;
  })

});
