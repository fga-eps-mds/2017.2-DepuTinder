import { renderComponent, expect } from '../test_helper';
import NavBar from '../../src/containers/navbar';

const actualAdminUserTest = {
  data: {
    userName:'admin',
  },
  admin: true,
}

const actualUserTest = {
  data: {
    userName:'user',
  },
  admin: false,
}

const adminState = {actualUser: actualAdminUserTest};
const userState = {actualUser: actualUserTest};

describe('NavBar admin', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(NavBar, null, adminState)
  });

  it('render navBar', () => {
    expect(component).to.have.class('navBar');
  });

  it('Render navbar on mobile', () => {
    expect(component.find('#renderNavBarMobile')).to.exist;
  });

  it('Render navbar on pc', () => {
    expect(component.find('#renderNavBar')).to.exist;
  });
});
