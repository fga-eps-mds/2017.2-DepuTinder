import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    console.log(this.rankingData);
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

export default connect(mapStateToProps, mapDispatchToProps)(RankingResultPanel);
