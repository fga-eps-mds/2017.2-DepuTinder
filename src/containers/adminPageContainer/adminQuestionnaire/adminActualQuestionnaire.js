import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchQuestionData } from '../../../actions/fetchQuestionData';

class AdminActualQuestionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getResults();
  }

  renderActualQuestionnaire() {
    const id = 1;
    return this.props.question.data.map((info) => {
      if (info.questionnaireFK !== id) {
        return null;
      } else {
        return (
          <div className="row" key={info.questionTitle}>
            <div className="col s12 m12">
              <div className="card-content black-text card white darken-1">
                <div>Título: {info.questionTitle}</div>
                <div>Subtítulo: {info.questionSubtitle}</div>
                <div>Descrição: {info.questionDescription}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    const EMPTY = 0;
    if (Object.keys(this.props.question).length !== EMPTY) {
      return (
        <div>
          {this.renderActualQuestionnaire()}
        </div>
      );
    } else {
      return (
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div><div className="gap-patch">
              <div className="circle" />
            </div><div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    question: state.questionData,
  };
}

AdminActualQuestionnaire.propTypes = {
  getResults: PropTypes.func,
  question: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

AdminActualQuestionnaire.defaultProps = {
  getResults() {},
  question: ([]),
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminActualQuestionnaire);
