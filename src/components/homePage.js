import React from 'react';
import NavBar from './navBar';
import AnswerButton from './answerButton';

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <center>
          <AnswerButton />
        </center>
      </div>
    </div>
  );
};

export default HomePage;
