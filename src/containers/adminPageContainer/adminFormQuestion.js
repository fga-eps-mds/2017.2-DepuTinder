import React, { Component } from 'react';

class AdminFormQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', subtitle: '', description: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.title);
    event.preventDefault();
  }

  render() {
    console.log(this.state.title);
    return (
      <div>
        <div className="card-content white accent-3">
          <i className="material-icons activator right" id="cardHelpIcon">help</i>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="input-field col s12" id="inputTitle">
                  <input
                    id="questionTitle"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    data-length="50"
                  />
                  <label htmlFor="questionTitle">Titulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputSubtitle">
                  <input
                    id="questionSubTitle" type="text" data-length="50"
                    onChange={event => this.handleSubtitleChange(event.target.value)}
                  />
                  <label htmlFor="questionSubTitle">SubTitulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputDescription">
                  <textarea
                    id="questionDescription" className="materialize-textarea" data-length="120"
                    onChange={event => this.handleDescriptionChange(event.target.value)}
                  />
                  <label htmlFor="questionDescription">Descrição</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="row" id="adminQuestionButtonsRow">
          <div className="col s6 m6 l6" id="sendButtonCollumn">
            <center>
              <a
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="sendButton"
              >
                <i className="material-icons right" id="sendButtonIcon">send</i>Enviar
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminFormQuestion;
