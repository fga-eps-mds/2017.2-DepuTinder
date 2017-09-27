import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RankingResultPanel from './rankingResultPanel';
import { FetchRankingData } from '../actions/fetchRankingData';

class Ranking extends Component {
  renderRankingPanel() {
    return (
      <ul className="collapsible collapsible-accordion" data-collapsible="accordion">
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
    );
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.getResults();
  }

  render() {
    if (this.props.rankingData.length === 10) {
      return (
        <div>
          <h1 className="center">Resultado</h1>
          {this.renderRankingPanel()}
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="center">Resultado</h1>
        </div>
      );
    }
  }
}

Ranking.propTypes = {
  getResults: PropTypes.func,
  rankingData: PropTypes.array,
};

Ranking.defaultProps = {
  getResults() {},
  rankingData: [],
};

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    rankingData: state.rankingData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchRankingData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
