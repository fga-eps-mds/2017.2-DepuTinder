import React from 'react';
import NavBar from './navBar';
import MainButton from './mainButton';

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <center>
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
            <li><MainButton /></li>
          </ul>
        </center>
      </div>
    </div>
  );
};

export default HomePage;
