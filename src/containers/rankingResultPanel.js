import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from 'react-sanfona';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rankingData = this.props.rankingData;
    return (
      <Accordion className="accordion">{
        rankingData.map((ranking) => {
          const matchRanking = ranking.groupID;
          return (
            <AccordionItem
              title={`Match ${matchRanking}%`}
              slug={ranking.groupID}
              key={ranking.groupID}
              className="react-sanfona-item-expanded"
            >
              {ranking.candidates.map((candidate) => {
                return (
                  <div>
                    <h1>{ candidate }</h1>
                  </div>
                );
              })}
            </AccordionItem>
          );
        })
      }
      </Accordion>
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
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  getResults() {},
};

export default connect(mapStateToProps)(RankingResultPanel);
