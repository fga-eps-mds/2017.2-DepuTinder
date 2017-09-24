import React, { Component } from 'react';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons black-text">person</i>Combinações com { this.props.percentage }%</div>
        <div className="collapsible-body"><span>Candidato 1</span></div>
      </li>
    );
  }

}

export default RankingResultPanel;
