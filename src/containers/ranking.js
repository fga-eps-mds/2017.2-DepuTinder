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
      <div className="ranking-background">
        <h1 className="center">Resultado</h1>
        <ul className="collapsible" data-collapsible="accordion">
          <RankingResultPanel percentage="90" groupID="9" />
          <RankingResultPanel percentage="80" groupID="8" />
          <RankingResultPanel percentage="70" groupID="7" />
          <RankingResultPanel percentage="60" groupID="6" />
          <RankingResultPanel percentage="50" groupID="5" />
          <RankingResultPanel percentage="40" groupID="4" />
          <RankingResultPanel percentage="30" groupID="3" />
          <RankingResultPanel percentage="20" groupID="2" />
          <RankingResultPanel percentage="10" groupID="1" />
          <RankingResultPanel percentage="0" groupID="0" />
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
