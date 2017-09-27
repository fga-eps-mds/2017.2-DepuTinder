import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchRankingData } from '../actions/fetchRankingData';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  resultArrayIsEmpty() {
    if (this.props.rankingData.length === 0) {
      this.props.getResults();
    }
  }

  render() {
    this.resultArrayIsEmpty();
    if (this.props.rankingData.length === 0) {
      return <div className="collapsible-header yellow accent-3"><span className="center">Carregando...</span></div>;
    }
    return (
      <li>
        <div className="collapsible-header yellow accent-3 center"><i className="material-icons black-text">people</i>Combinações com { this.props.percentage }%</div>
        { this.props.rankingData[this.props.groupID].candidates.map((rankingData) => {
          return (
            <div className="collapsible-body grey darken-3 yellow-text">
              <center>
                <i className="material-icons black-text">person</i>
                <span>{rankingData.name}</span>
              </center>
            </div>
          );
        }) }
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
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

RankingResultPanel.propTypes = {
  rankingData: PropTypes.array,
  groupID: PropTypes.string,
  getResults: PropTypes.func,
  percentage: PropTypes.string,
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  groupID: -1,
  getResults() {},
  percentage: -1,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingResultPanel);
