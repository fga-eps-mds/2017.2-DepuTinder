import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  return (
    <div className="mainButton">
<<<<<<< HEAD
      <a onClick={() => browserHistory.push('/answerQuestionnaire')} className="waves-effect waves-light btn grey darken-3 yellow-text text-accent-3">{props.text}</a>
=======
      <div>
        <a onClick={() => browserHistory.push('/answer')} className="waves-effect waves-light btn grey darken-3 yellow-text text-accent-3">{props.text}</a>
      </div>
>>>>>>> 078fa601b34620d8e0c72a4ebbe9955b1f731b4c
    </div>
  );
};

MainButton.propTypes = {
  text: PropTypes.string,
};

MainButton.defaultProps = {
  text: 'Responder Questionário',
};

export default MainButton;
