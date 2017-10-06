import React from 'react';
import { browserHistory } from 'react-router';

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <div className="nav-wrapper grey darken-3" id="renderNavBar" >
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo center yellow-text text-accent-3"
            id="textNavBar"
          >DepuTinder
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
