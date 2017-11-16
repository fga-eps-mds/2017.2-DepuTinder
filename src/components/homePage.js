import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MainButton from './mainButton';

class HomePage extends Component {

  static btnClick() {
    browserHistory.push('/responder');
  }

  render() {
    return (
      <div className="HomePage">
        <center>
          <i className="large material-icons" id="peopleIcon">people</i>
          <ul className="homePageItems">
            <li>
              <p id="paragraph_home_page">
              Lorem ipsum dolor sit amet, malorum tibique hendrerit pri cu.
              Ne utinam deleniti detraxit mel. Vel affert verear ne, iudico
              voluptua intellegat. Cetero malorum theophrastus mea ex, tempor
              voluptaria philosophia vel ne.
              </p>
            </li>
            <br />
            <br />
            <li><MainButton text="Responder questionário" onClick={HomePage.btnClick} /></li>
          </ul>
        </center>
      </div>
    );
  };
};

export default HomePage;
