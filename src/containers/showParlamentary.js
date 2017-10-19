import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowParlamentary extends Component {

  render() {
    return (
      <div>
        {this.props.selectedParlamentary[0]}
        <br />
        <img src={this.props.selectedParlamentary[1]}></img>
        <br />
        {this.props.selectedParlamentary[2]}
        <br />
        {this.props.selectedParlamentary[3]}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedParlamentary: state.selectedParlamentary,
  };
}

export default connect(mapStateToProps)(ShowParlamentary);
