import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ShowParlamentary = (props) => {
  return (
    <div>
      <h4 className="header">{props.selectedParlamentary.fields.name}</h4>
      <div className="row">
        <div className="card horizontal" >
          <div className="col s6">
            <div className="card-image" id="deputyPhoto">
              <img src={props.selectedParlamentary.fields.photoPath} alt="Foto do(a) parlamentar" />
            </div>
          </div>
          <div className="col s6">
            <div className="card-stacked">
              <div className="card-content">
                <p><h7>UF: </h7> {props.selectedParlamentary.fields.uf} </p>
                <br />
                <p><h7> PARTIDO: </h7> {props.selectedParlamentary.fields.party} </p>
              </div>
              <div className="card-action" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


ShowParlamentary.propTypes = {
  selectedParlamentary: PropTypes.obj,
};

ShowParlamentary.defaultProps = {
  selectedParlamentary: {},
};


function mapStateToProps(state) {
  return {
    selectedParlamentary: state.selectedParlamentary,
  };
}

export default connect(mapStateToProps)(ShowParlamentary);
