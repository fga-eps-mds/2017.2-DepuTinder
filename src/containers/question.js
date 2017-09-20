import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchAnswerQuestion } from '../actions/fetchAnswerQuestion';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };
  }

  render() {
    const id = this.props.id;
    return (
      <div className="card" id="question-card">
        <div className="card-content yellow acent-3">
          <center>
            <h3 className="grey-text text-darken-3"><b>Votação { this.props.id }</b></h3>
            <span className="card-title grey-text text-darken-3"><b>{ this.props.title }</b><i className="material-icons activator right">help</i></span>
            <p className="align-left">{ this.props.subTitle }</p>
            <ul>
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ id, answer: 'SIM' })}>
                Sou a favor
                </a>
              </li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ id, answer: 'NÃO' })}>
                Sou contra</a></li>
              <br />
              <li><a className="waves-effect waves-light btn grey darken-3" onClick={() => this.props.sendAnswer({ id, answer: 'ME ABSTENHO' })}>
                Me abstenho</a></li>
            </ul>
          </center>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{ this.props.title }<i className="material-icons right">close</i></span>
          <p>{ this.props.questionDescription }</p>
          <a className="proposition-link" href="">Saiba mais(link para a descrição)</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
    questionData: state.questionData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAnswer(answer) {
      dispatch(FetchAnswerQuestion(answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
