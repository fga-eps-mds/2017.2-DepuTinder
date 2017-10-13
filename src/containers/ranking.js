import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import RankingResultPanel from './rankingResultPanel';
import { FetchRankingData } from '../actions/fetchRankingData';

class Ranking extends Component {

  static renderRankingPanel() {
    return (
      <div className="rankingMatches">
        <RankingResultPanel />
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
    if (this.props.rankingData.length !== 0) {
      return (
        <div className="rankingBody">
          <h1 className="center" id="rankingTitle">Resultado</h1>
          {Ranking.renderRankingPanel()}
        </div>
      );
    } else {
      return (
        <div className="rankingBodyLoading">
          <h2 className="center" id="rankingTitleLoading">
            Você não respondeu ao questionário, por favor responda.
          </h2>
          <a
            onClick={() => browserHistory.push('/responder')}
            className="waves-effect waves-light btn black yellow-text text-accent-3"
            id="mainButton"
          >Responder Questionário
          </a>
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
