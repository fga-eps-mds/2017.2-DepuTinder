import { renderComponent, expect } from '../test_helper';
import NavBar from '../../src/containers/navbar';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

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

  it('Render navbar on pc', () => {
    expect(component.find('#renderNavBar')).to.exist;
  });
});
