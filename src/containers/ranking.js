import React, { Component } from 'react';
import RankingResultPanel from './rankingResultPanel';

class Rankging extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1 className="center">Resultado</h1>
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
        <RankingResultPanel />
      </div>
    );
  }
}

export default Rankging;
