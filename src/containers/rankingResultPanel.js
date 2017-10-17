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
      <Accordion
        className="react-sanfona"
        activeItems={[]}
      >{
        rankingData.map((ranking) => {
          const matchRanking = ranking.groupID;
          return (
            <AccordionItem
              title={`Match ${matchRanking}%`}
              key={matchRanking}
              className="react-sanfona-item-body accordion"
              expandedClassName="accordionBody"
              titleClassName="accordionTitle"
            >
              {ranking.candidates.map((candidate) => {
                return (
                  <div
                    key={candidate}
                    id="test"
                  >
                    <i className="material-icons small">person</i>
                    { candidate }
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
