import React from 'react';
import NavBar from './navBar';
import AnswerButton from './answerButton';

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="row s4 m4 l4">
        <div className="col s4 m4 l4">
          <AnswerButton />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
