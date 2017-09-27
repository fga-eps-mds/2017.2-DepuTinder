import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  return (
    <div className="mainButton">
      <a onClick={() => browserHistory.push('/responder')}
      className="waves-effect waves-light btn black yellow-text text-accent-3">{props.text}
      </a>
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
