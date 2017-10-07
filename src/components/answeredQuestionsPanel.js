import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ListAnsweredQuestions from '../containers/listAnsweredQuestions';

class AnsweredQuestionsPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="answerPanel">
        <h3 className="center" id="answerPanelTitle">Respostas</h3>
        <ul id="listAnswers" className="collapsible" data-collapsible="accordion">
          <ListAnsweredQuestions questionID="0" />
          <ListAnsweredQuestions questionID="1" />
          <ListAnsweredQuestions questionID="2" />
          <ListAnsweredQuestions questionID="3" />
          <ListAnsweredQuestions questionID="4" />
          <ListAnsweredQuestions questionID="5" />
          <ListAnsweredQuestions questionID="6" />
          <ListAnsweredQuestions questionID="7" />
          <ListAnsweredQuestions questionID="8" />
          <ListAnsweredQuestions questionID="9" />
        </ul>
        <div className="row" id="answerListButtonsRow">
          <div className="col s6 m6 l6" id="editButtonColumn">
            <center>
              <a
                className="waves-effect waves-light btn black"
                id="editButton"
                onClick={() => browserHistory.push('/responder')}
              ><i className="material-icons right" id="editButtonIcon">edit</i>Editar
              </a>
            </center>
          </div>
          <div className="col s6 m6 l6" id="sendButtonColumn">
            <center>
              <a
                className="waves-effect waves-light btn black"
                id="sendtButton"
                onClick={() => browserHistory.push('ranking')}
              >
                <i className="material-icons right" id="sendButtonIcon">send</i>Submeter
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default AnsweredQuestionsPanel;
