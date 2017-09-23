import React, { Component } from 'react';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <li>
          <div className="collapsible-header"><i className="material-icons black-text">person</i>Combinações com X%</div>
          <div className="collapsible-body"><span>Candidato 1</span></div>
        </li>
      </div>
    );
  }
}

export default RankingResultPanel;
