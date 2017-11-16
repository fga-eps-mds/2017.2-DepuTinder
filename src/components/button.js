import React from 'react';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  return (
    <div className="mainButton">
      <a
        onClick={props.onClick}
        className="waves-effect waves-light btn black yellow-text text-accent-3"
        id="answerQuestionnaireButton"
      >{props.text}
      </a>
    </div>
  );
};

MainButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

MainButton.defaultProps = {
  text: 'Responder Questionário',
  onClick() {},
};

export default MainButton;
