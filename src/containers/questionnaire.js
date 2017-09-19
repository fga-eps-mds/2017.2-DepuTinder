import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchQuestionData from '../actions/fetchQuestionData';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
    this.state = { answeredQuestion: [],
      t: [],
      i: 0,
      obj: {} };
  }

  bora() {
    if(this.props.answeredQuestions === undefined){
      t = this.state.answeredQuestion;
    } else {
      t = this.props.answeredQuestions;
    }
  }

  render() {
    const u = [];
    return (
      <div>
        <center>
          <a
            className="waves-effect waves-light btn-large"
            onClick={() => this.bora()}
          >
          Bora!
          </a>\
          <a
            className="waves-effect waves-light btn-large"
            onClick={() => FetchQuestionData(u, this.obj)}
          >
          Buscar CEP!
          </a>
          <a
            className="waves-effect waves-light btn-large"
            onClick={() => { this.i += 1; }}
          >
          add i
          </a>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
  };
}

export default connect(mapStateToProps, { FetchQuestionData })(Questionnaire);
