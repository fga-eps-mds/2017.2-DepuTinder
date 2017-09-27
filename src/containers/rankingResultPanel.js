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
      return <div className="collapsible-header"><span>Carregando...</span></div>;
    }
    return (
      <li>
        <div className="collapsible-header"><i className="material-icons black-text">person</i>Combinações com { this.props.percentage }%</div>
        { this.props.rankingData[this.props.groupID].candidates.map((rankingData) => {
          return <div className="collapsible-body"><span>{rankingData.name}</span></div>;
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
  groupID: PropTypes.number,
  getResults: PropTypes.func,
  percentage: PropTypes.number,
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  groupID: -1,
  getResults() {},
  percentage: -1,
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingResultPanel);
