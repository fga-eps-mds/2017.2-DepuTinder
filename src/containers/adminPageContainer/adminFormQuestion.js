import React, { Component } from 'react';

class AdminFormQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card-content white accent-3">
          <i className="material-icons activator right" id="cardHelpIcon">help</i>
          <form>
            <div className="container">
              <div className="row">
                <div className="input-field col s12" id="inputTitle">
                  <input id="questionTitle" type="text" data-length="50" />
                  <label htmlFor="questionTitle">Titulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputSubtitle">
                  <input id="questionSubTitle" type="text" data-length="50" />
                  <label htmlFor="questionSubTitle">SubTitulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputDescription">
                  <textarea id="questionDescription" className="materialize-textarea" data-length="120" />
                  <label htmlFor="questionDescription">Descrição</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminFormQuestion;
