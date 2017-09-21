import React, { Component } from 'react';
import HomePage from './homePage';
import NavBar from './navBar';

class App extends Component {
  render() {
    return (
      <div className="testSample">
        <NavBar />
        { this.props.children || <HomePage /> }
      </div>
    );
  }
}

export default App;
