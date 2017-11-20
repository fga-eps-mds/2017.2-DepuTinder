import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from './homePage';
import Navbar from '../containers/navbar';

class App extends Component {
  render() {
    return (
      <div className="testSample">
        <Navbar />
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
