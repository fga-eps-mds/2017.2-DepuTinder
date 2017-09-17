import React from 'react';

const Question = () => {
  return (
    <div className="card" id="question-card">
      <div className="card-content yellow acent-3">
        <center>
          <h3 className="grey-text text-darken-3"><b>Votação X</b></h3>
          <span className="card-title grey-text text-darken-3"><b>Titulo da proposição</b><i className="material-icons activator right">help</i></span>
          <p className="align-left">Sub-Titulo da proposição</p>
          <ul>
            <li><a className="waves-effect waves-light btn grey darken-3">Sou a favor</a></li>
            <br />
            <li><a className="waves-effect waves-light btn grey darken-3">Sou contra</a></li>
            <br />
            <li><a className="waves-effect waves-light btn grey darken-3">Me abstenho</a></li>
          </ul>
        </center>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Titulo da Proposição<i className="material-icons right">close</i></span>
        <p>Descrição da proposição</p>
        <a className="proposition-link" href="">Saiba mais(link para a descrição)</a>
      </div>
    </div>
  );
};

export default Question;
