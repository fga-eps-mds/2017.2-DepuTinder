import React from 'react';
import { browserHistory } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <nav>
        <div id="navBar" className="nav-wrapper grey darken-3">
          <a
            onClick={() => browserHistory.push('/')}
            className="brand-logo center yellow-text text-accent-3"
          >DepuTinder
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
