import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ShowParlamentary = (props) => {
  const selectedParlamentary = props.selectedParlamentary;
  const parlamentaryName = selectedParlamentary.parlamentaryName;
  const parlamentaryPhotoPath = selectedParlamentary.parlamentaryPhotoPath;
  const parlamentaryUF = selectedParlamentary.parlamentaryUF;
  const parlamentaryPoliticalParty = selectedParlamentary.parlamentaryPoliticalParty;
  return (
    <div>
      <h4 className="header">{parlamentaryName}</h4>
      <div className="row">
        <div className="card horizontal" >
          <div className="col s6">
            <div className="card-image" id="deputyPhoto">
              <img src={parlamentaryPhotoPath} alt="Foto do(a) parlamentar" />
            </div>
          </div>
          <div className="col s6">
            <div className="card-stacked">
              <div className="card-content">
                <p><h7>UF: </h7> {parlamentaryUF} </p>
                <br />
                <p><h7> PARTIDO: </h7> {parlamentaryPoliticalParty} </p>
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
