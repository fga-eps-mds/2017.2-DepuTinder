import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RankingResultPanel from './rankingResultPanel';
import { FetchRankingData } from '../actions/fetchRankingData';

class Ranking extends Component {

  static renderRankingPanel() {
    return (
      <div className="rankingMatches">
        <RankingResultPanel percentage="90" groupID="0" />
        <RankingResultPanel percentage="80" groupID="1" />
        <RankingResultPanel percentage="70" groupID="2" />
        <RankingResultPanel percentage="60" groupID="3" />
      </div>
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
    if (this.props.rankingData.length === 4) {
      return (
        <div className="rankingBody">
          <h1 className="center" id="rankingTitle">Resultado</h1>
          {Ranking.renderRankingPanel()}
        </div>
      );
    } else {
      return (
        <div className="rankingBodyLoading">
          <h1 className="center" id="rankingTitleLoading">Resultado</h1>
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
