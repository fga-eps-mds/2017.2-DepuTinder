import { connect } from 'react-redux';
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
        <ul className="collapsible" data-collapsible="accordion">
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
          <RankingResultPanel />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
  };
}

export default connect(mapStateToProps)(Rankging);
