import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const groupID = Number(this.props.groupID);
    return (
      <div className={`group${groupID}`}>
        <ul className="collection with-header" id={`resultRow${groupID}`}>
          <li className="collection-header" id={`collectionHeader${groupID}`}>
            <h4 id={`collectionHeaderText${groupID}`}>Match de { this.props.percentage }%</h4>
          </li>
          {
            this.props.rankingData[groupID].candidates.map((candidate) => {
              return (
                <li className="collection-item" id={`collectionItem${groupID}`} key={candidate.id}>{ candidate }</li>
              );
            })
          }
        </ul>
      </div>
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
  percentage: PropTypes.string,
  groupID: PropTypes.string,
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  groupID: 0,
  getResults() {},
  percentage: 0,
};

export default connect(mapStateToProps)(RankingResultPanel);
