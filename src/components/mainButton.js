import React from 'react';

const MainButton = (props) => {
  return (
    <div className="mainButton">
      <div>
        <a className="waves-effect waves-light btn grey darken-3 yellow-text text-accent-3">{props.text}</a>
      </div>
    </div>
  );
};

export default MainButton;
