import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const MainButton = (props) => {
  return (
    <div className="mainButton">
      <div>
        <a onClick={() => browserHistory.push('/answer')} className="waves-effect waves-light btn grey darken-3 yellow-text text-accent-3">{props.text}</a>
      </div>
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
