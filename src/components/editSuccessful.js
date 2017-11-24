import React from 'react';
import { browserHistory } from 'react-router';

const EditSuccessful = () => {
  return (
    <div id="successHeading">
      <center style={{ margin: 50 }}>
        <h4 id="successHeading">Conta modificada com sucesso!</h4>
        <a
          id="homePageButton"
          className="btn"
          onClick={() => browserHistory.push('/')}
          style={{ backgroundColor: 'black', margin: 50 }}
        >Página inicial</a>
      </center>
    </div>
  );
};

export default EditSuccessful;
