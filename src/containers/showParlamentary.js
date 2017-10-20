import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowParlamentary extends Component {

  render() {
    return (
      <div>
        <h4 className="header">{this.props.selectedParlamentary[0]}</h4>
        <div className="row">
          <div className="card horizontal" >
            <div className="col s6">
              <div className="card-image" id="deputyPhoto">
                <img src={this.props.selectedParlamentary[1]} />
              </div>
            </div>
            <div className="col s6">
              <div className="card-stacked">
                <div className="card-content">
                  <p><h7>UF: </h7> {this.props.selectedParlamentary[2]} </p>
                  <br />
                  <p><h7> PARTIDO: </h7> {this.props.selectedParlamentary[3]} </p>
                </div>
                <div className="card-action" />
              </div>
            </div>
          </div>
        </div>
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
