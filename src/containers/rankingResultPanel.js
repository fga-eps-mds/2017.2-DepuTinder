import React, { Component } from 'react';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container yellow" id="result-card">
        <a className="candidate-icon"><i className="large material-icons black-text">person</i></a>
        <span id="result-card-text">X Combinações</span>
        <span id="card-percentage">X%</span>
        <a id="btnLista" className="waves-effect waves-light btn grey darken-3">Ver lista</a>
      </div>
    );
  }
}

export default RankingResultPanel;
