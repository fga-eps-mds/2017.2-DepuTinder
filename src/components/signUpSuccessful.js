import React from 'react';
import { browserHistory } from 'react-router';

const SignUpSuccessful = () => {
  return (
    <div id="successHeading">
      <center style={{ margin: 50 }}>
        <h3 id="successHeading">Conta criada com sucesso!</h3>
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

export default SignUpSuccessful;
