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
    this.state = { countToProgressBar: 0 };
  }

  componentWillMount() {
    this.props.getResults();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ countToProgressBar: this.state.countToProgressBar + 1 });
  }

  render() {
    const EMPTY = 0;
    if (this.props.rankingData.length !== EMPTY) {
      return (
        <div className="rankingBody">
          <h1 className="center" id="rankingTitle">Resultado</h1>
          {Ranking.renderRankingPanel()}
        </div>
      );
    } else if (this.state.countToProgressBar < 10) {
      return (
        <div className="progress">
          <div className="indeterminate" />
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
