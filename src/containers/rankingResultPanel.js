import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCandidates() {
    return this.props.rankingData[this.props.groupID].candidates.map((candidate) => {
      return (
        <div key={candidate.name} className="collapsible-body">
          <span>{candidate.name}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <i className="material-icons black-text">person</i>Combinações com { this.props.percentage }%
        </div>
        <div className="collapsible-body">
          <span>Tulião</span>
        </div>
        {this.renderCandidates()}
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    rankingData: state.rankingData,
  };
}


RankingResultPanel.propTypes = {
  rankingData: PropTypes.array,
  groupID: PropTypes.string,
  percentage: PropTypes.string,
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  groupID: -1,
  getResults() {},
  percentage: -1,
};

export default connect(mapStateToProps)(RankingResultPanel);
