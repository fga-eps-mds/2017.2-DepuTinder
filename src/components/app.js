import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from './homePage';
import NavBar from './navBar';

import Collapsible from './collapsible';

class App extends Component {
  render() {
    return (
      <div className="testSample">
        <NavBar />
        <Collapsible />
        { this.props.children || <HomePage /> }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

App.defaultProps = {
  children: 'default',
};

export default App;
